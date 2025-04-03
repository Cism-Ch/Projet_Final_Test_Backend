const mongoose = require('mongoose');
require('dotenv').config(); // Add this line to load environment variables

// connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

// Export the function, not the execution result
module.exports = connectDB;
