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
    }
});

mongoose.model('Task', taskSchema);
