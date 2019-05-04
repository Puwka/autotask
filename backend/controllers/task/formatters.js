const formatTaskList = (tasks, role) => {
    if (role === 'manager') {
        return tasks.map(task => ({
            id: task._id,
            title: task.title,
            executor: task.executor,
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
    time: task.time
});

module.exports = {
    formatTaskList,
    formatTaskOne
};
