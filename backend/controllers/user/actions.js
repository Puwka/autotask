const mongoose = require('mongoose');
const passwordGenerator = require('password-generator');
const { encrypt, compare } = require('../../services/crypto');
const { generateJwt } = require('../../services/jwt');
const formatters = require('./formatters');

const { User } = mongoose.models;

const getUserList = async ctx => {
    const users = await User.find();
    ctx.body = {
        users: formatters.formatUserList(users)
    }
};

const postSignUp = async ctx => {
    const {
        login,
        password,
        name,
        role
    } = ctx.request.body;
    const user = await User.findOne({ login });
    const encryptedPass = await encrypt(password);
    ctx.assert(!user, 400, 'Login is already taken');

    const newUser = new User({
        login,
        name,
        role,
        password: encryptedPass,
        avaColors: {
            top: passwordGenerator(7, false, /[A-F1-9]/, '#'),
            bottom: passwordGenerator(7, false, /[A-F1-9]/, '#')
        }
    });

    await newUser.save();
    ctx.body = { ok: true };
};

const postSignIn = async ctx => {
    const { login, password } = ctx.request.body;
    const user = await User.findOne({ login });
    ctx.assert(user, 400, 'No such nickname');

    const passwordMatch = await compare(password, user.password);
    ctx.assert(passwordMatch, 400, 'Incorrect credentials');
    const token = generateJwt({ user: user._id });
    ctx.body = { token };
};

const getUser = async ctx => {
    ctx.body = {
        user: formatters.formatUserOne(ctx.state.user)
    }
};

module.exports = {
    getUserList,
    getUser,
    postSignUp,
    postSignIn
};
