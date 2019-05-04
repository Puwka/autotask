const mongoose = require('mongoose');
const formatters = require('./formatters');

const { Task } = mongoose.models;

const paramTask = async ctx => {
    ctx.state.task = await Task.findById(ctx.param.task)
};

const getTasksList = async ctx => {
    const { role } = ctx.state.user;
    const tasks = await Task.find({
        deletedAt: null
    });

    ctx.body = {
        tasks: formatters.formatTaskList(tasks, role)
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
        tag
    } = ctx.request.body;

    const { task, user } = ctx.state;

    if ((tag || points) && user.role !== 'manager') {
        ctx.throw(403, 'Permission denied')
    }

    task.set({
        title: title || task.title,
        description: description || task.description,
        approximatePoints: points || task.approximatePoints,
        time: time || task.time,
        tag: tag || task.tag
    });

    await task.save();

    ctx.body = {
        task: formatters.formatTaskOne(task)
    }
};

module.exports = {
    paramTask,
    getTasksList,
    deleteTask,
    postTaskCreate,
    putTask
};
