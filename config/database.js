const mongoose = require('mongoose');

async function dbConnect() {
    try {
        const connection = await mongoose.connect("mongodb+srv://pp5Admin:4vYYQA3c8QMakGMH@pp5db.zq4iw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=pp5db");

        if (connection) {
            console.log("Connected to database...");
        }
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; 
    }
}

module.exports = dbConnect;