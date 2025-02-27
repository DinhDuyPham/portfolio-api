const mongoose = require('mongoose');
require('dotenv').config();

const connectUri = process.env.MONGODB_URI;
// ?? "m@pdduy.7ucad.mongodb.net/"
const connect = async () => {
    try {
        await mongoose.connect(connectUri);
        console.log('Connected to database');
    } catch (error) {
        console.error('Failed to connect to database', error);
    }
};

module.exports = {
    connect,
};
