const mongoose = require('mongoose');
const formatters = require('./formatters');

const { Task, User } = mongoose.models;

const paramTask = async (id, ctx, next) => {
    ctx.state.task = await Task.findById(id);
    await next()
};

const getTasksList = async ctx => {
    const tasks = await Task.find({
        deletedAt: null
    })
        .populate('_executor');

    ctx.body = {
        tasks: formatters.formatTaskList(tasks)
    }
};

const deleteTask = async ctx => {
    const { task, user } = ctx.state;
    if (!user || user.role !== 'manager') {
        ctx.throw(403, 'Permission denied')
    }
    task.deletedAt = new Date();
    task.save();

    ctx.body = { ok: true }
};

const postTaskCreate = async ctx => {
    const { title, description, tag } = ctx.request.body;
    const task = new Task({
        title,
        description,
        tag
    });
    try {
        await task.save();
    } catch (err) {
        ctx.throw(400, 'Task was not created')
    }

    ctx.body = {
        task: formatters.formatTaskOne(task)
    }
};

const putTask = async ctx => {
    const {
        title,
        description,
        points,
        time,
        tag,
        status,
        executor
    } = ctx.request.body;

    const { task, user } = ctx.state;

    if ((tag || points) && user.role !== 'manager') {
        ctx.throw(403, 'Permission denied')
    }

    task.set({
        title: title || task.title,
        description: description || task.description,
        approximatePoints: points || task.approximatePoints,
        _executor: (executor && executor._id) || task._executor,
        time: time || task.time,
        tag: tag || task.tag,
        status: status || task.status
    });

    await task.save();
    await task.populate('_executor').execPopulate();

    ctx.body = {
        task: formatters.formatTaskOne(task)
    }
};

const getTask = async ctx => {
    const { task } = ctx.state;

    const { tag } = task;
    await task.populate('_executor').execPopulate();

    const suggestedExecutors = await User
        .find({
            role: 'developer'
        });


    ctx.body = {
        task: formatters.formatTaskOne(task),
        suggestedExecutors: suggestedExecutors
            .map(user => ({
                id: user._id,
                name: user.name,
                score: user.spec === tag ? 1 : 0.1
            }))
            .sort((a, b) => b.score - a.score)
    }
};

module.exports = {
    paramTask,
    getTasksList,
    deleteTask,
    postTaskCreate,
    putTask,
    getTask
};
