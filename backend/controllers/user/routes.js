const Router = require('koa-router');
const actions = require('./actions');

module.exports = Router()
    .prefix('/user')
    .get('/', actions.getUser)
    .post('/', actions.postCreateUser)
    .post('/signup', actions.postSignUp)
    .post('/signin', actions.postSignIn);
