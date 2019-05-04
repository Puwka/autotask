const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    name: String,
    password: String,
});

mongoose.model('User', userSchema);
