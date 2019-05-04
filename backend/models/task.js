const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const taskSchema = new mongoose.Schema({
    title: String,
    approximatePoints: Number,
    time: Number,
    executor: {
        type: ObjectId,
        ref: 'User',
        index: true
    },
    description: String,
    tag: {
        type: String,
        enum: ['js', 'python', 'html']
    },
    deletedAt: Date
});

mongoose.model('Task', taskSchema);
