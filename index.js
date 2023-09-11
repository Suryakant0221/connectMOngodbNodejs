// Import required libraries and modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Import the User model (replace 'user.models' with the actual path to your User model file)
const UserModel = require('./models/user.models');

// MongoDB connection URL
const mongoDB = 'mongodb://localhost:27017/curdoperation';

// Function to connect to the MongoDB database
async function connectToDatabase() {
    try {
        // Attempt to connect to the MongoDB server
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB is connected'); // Log a successful connection message
    } catch (err) {
        console.error(`Unable to connect to MongoDB: ${err}`); // Log an error if the connection fails
    }
}

// Create a new user instance with data
const newUser = new UserModel({
    name: "suryakant",
    email: "suryakant@gmail.com",
    mobile: 8051942924
});

// Function to save the user data to the database
async function saveUser() {
    try {
        // Attempt to save the user data to the database
        const savedUser = await newUser.save();
        console.log(`User data saved successfully: ${savedUser}`); // Log a success message with the saved user data
    } catch (err) {
        console.error(`Error saving user data: ${err.message}`); // Log an error if the save operation fails
    }
}

// Connect to the MongoDB database
connectToDatabase();

// Save the user data to the database
saveUser();

// Start the Express server
app.listen(6000, () => {
    console.log('Server is running on port number 6000'); // Log a message when the server starts
});
