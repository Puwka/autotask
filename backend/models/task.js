const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    approximatePoints: {
        type: Number,
        enum: [1, 2, 4, 8, 16]
    },
    time: Number,
    _executor: {
        type: ObjectId,
        ref: 'User',
        index: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['backlog', 'inProgress', 'testing', 'done', 'archived'],
        default: 'backlog'
    },
    tag: {
        type: String,
        enum: ['js', 'python', 'html'],
        required: true
    },
    deletedAt: Date
});

mongoose.model('Task', taskSchema);
