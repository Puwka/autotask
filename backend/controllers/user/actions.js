const mongoose = require('mongoose');

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

module.exports = {
    getUser,
    postCreateUser
};
