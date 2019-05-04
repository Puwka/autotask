const formatTaskList = (tasks, role) => {
    if (role === 'manager') {
        return tasks.map(task => ({
            id: task._id,
            title: task.title,
            executor: task.executor,
            description: task.description,
            tag: task.tag,
            approximatePoints: task.approximatePoints,
            time: task.time
        }))
    }
    return tasks.map(task => ({
        id: task._id,
        title: task.title,
        executor: task.executor,
        time: task.time
    }))
};

const formatTaskOne = task => ({
    id: task._id,
    title: task.title,
    description: task.description,
    executor: task.executor,
    time: task.time,
    tag: task.tag
});

module.exports = {
    formatTaskList,
    formatTaskOne
};
