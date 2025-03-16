const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/eventProductionDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        console.error(error);
    }
}

module.exports = connectDB;