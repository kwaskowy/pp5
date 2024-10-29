const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);

        if (connection) {
            console.log("Connected to database...");
        }
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; 
    }
}

module.exports = dbConnect;