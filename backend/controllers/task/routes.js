const Router = require('koa-router');
const actions = require('./actions');

module.exports = Router()
    .prefix('/api/task')
    .param('task', actions.paramTask)
    .get('/list', actions.getTasksList)
    .post('/', actions.postTaskCreate)
    .put('/:task', actions.putTask)
    .get('/:task', actions.getTask)
    .delete('/:task', actions.deleteTask);
