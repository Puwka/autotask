const Router = require('koa-router');
const { getUser, postCreateUser } = require('./actions');

module.exports = Router()
    .prefix('/user')
    .get('/', getUser)
    .post('/', postCreateUser);
