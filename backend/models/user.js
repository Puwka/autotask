const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    name: String,
    password: String,
    role: {
        type: String,
        enum: ['developer', 'manager']
    }
});

mongoose.model('User', userSchema);
