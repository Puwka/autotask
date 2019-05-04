const Router = require('koa-router');
const actions = require('./actions');

module.exports = Router()
    .prefix('/api/user')
    .get('/list', actions.getUserList)
    .get('/', actions.getUser)
    .post('/signup', actions.postSignUp)
    .post('/signin', actions.postSignIn);
