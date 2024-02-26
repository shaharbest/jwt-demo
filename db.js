const mongoose = require('mongoose');

const protocol = 'mongodb';
const host = '127.0.0.1';
const mongoUrl = `${protocol}://${host}`;
const options = { dbName: 'ariel' };

function connect() {
    mongoose.connect(mongoUrl, options);
}

function disconnect() {
    mongoose.connection.close();
}

module.exports = { connect, disconnect };