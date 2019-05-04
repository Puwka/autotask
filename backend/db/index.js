const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const config = require('../config');

const modelsPath = path.join(__dirname, '..', 'models');

const initModels = () => {
    fs
        .readdirSync(modelsPath)
        .filter(file => file.endsWith('.js'))
        // eslint-disable-next-line
        .forEach(file => require(path.join(modelsPath, file)));
};

const connect = () => {
    const { host: mongoHost, name: databaseName } = config.database;
    mongoose.connect(`mongodb://${mongoHost}:27017/${databaseName}`, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('connected mongodb');
    });

    initModels();
};

module.exports = { connect };
