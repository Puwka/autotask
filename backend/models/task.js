const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    approximatePoints: Number,
    time: Number,
    executor: {
        type: ObjectId,
        ref: 'User',
        index: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        enum: ['js', 'python', 'html'],
        required: true
    },
    deletedAt: Date
});

mongoose.model('Task', taskSchema);
