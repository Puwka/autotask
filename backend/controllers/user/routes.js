const Router = require('koa-router');
const actions = require('./actions');

module.exports = Router()
    .prefix('/api/user')
    .get('/', actions.getUsers)
    .post('/signup', actions.postSignUp)
    .post('/signin', actions.postSignIn);
