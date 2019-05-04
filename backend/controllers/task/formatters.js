const formatTaskList = tasks => {
    const result = {
        backlog: [],
        inProgress: [],
        testing: [],
        done: [],
        archived: []
    };
    tasks.map(task => ({
        id: task._id,
        title: task.title,
        executor: task.executor,
        description: task.description,
        status: task.status,
        tag: task.tag,
        points: task.approximatePoints,
        time: task.time
    }))
        .forEach(task => {
            result[task.status].push(task)
        });
    return result
};

const formatTaskOne = task => ({
    id: task._id,
    title: task.title,
    description: task.description,
    executor: task._executor.formatPublic(),
    points: task.approximatePoints,
    status: task.status,
    time: task.time,
    tag: task.tag
});

module.exports = {
    formatTaskList,
    formatTaskOne
};
