const Router = require('koa-router');
const actions = require('./actions');

module.exports = Router()
    .prefix('/api/task')
    .param('task', actions.paramTask)
    .get('/list', actions.getTasksList)
    .post('/', actions.postTaskCreate)
    .put('/:task', actions.putTask)
    .delete('/:task', actions.deleteTask);
