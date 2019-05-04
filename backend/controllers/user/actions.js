const mongoose = require('mongoose');
const { encrypt, compare } = require('../../services/crypto');

const { User } = mongoose.models;

const getUser = async ctx => {
    ctx.body = 123123;
};

const postCreateUser = async ctx => {
    const name = 'perdo';
    const user = new User({ name });
    await user.save();

    ctx.body = { user };
};

const postSignUp = async ctx => {
    const { login, password, name } = ctx.request.body;
    const user = await User.findOne({ login });
    const encryptedPass = await encrypt(password);
    ctx.assert(!user, 400, 'Login is already taken');

    const newUser = new User({ login, name, password: encryptedPass });
    await newUser.save();
    ctx.body = { ok: true };
};

module.exports = {
    getUser,
    postCreateUser,
    postSignUp
};
