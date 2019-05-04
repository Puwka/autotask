const mongoose = require('mongoose');
const { verifyJwt } = require('../services/jwt');

const { User } = mongoose.models;

const checkAuth = async (ctx, next) => {
    if (!ctx.request.path.startsWith('/api')) {
        return next();
    }
    if (['/api/user/signin', '/api/user/signup'].includes(ctx.request.path)) {
        return next();
    }
    const { authorization } = ctx.request.headers;
    try {
        const { user } = verifyJwt(authorization);
        const foundUser = await User.findOne({ _id: user });

        if (!foundUser) {
            throw new Error();
        }
        ctx.state.user = foundUser;
    } catch (err) {
        ctx.throw(401, 'Unauthorized');
    }
    await next();
};

module.exports = {
    checkAuth,
};
