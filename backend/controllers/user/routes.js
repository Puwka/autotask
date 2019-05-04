const Router = require('koa-router');
const actions = require('./actions');

module.exports = Router()
    .prefix('/user')
    .get('/', actions.getUsers)
    .post('/signup', actions.postSignUp)
    .post('/signin', actions.postSignIn);
