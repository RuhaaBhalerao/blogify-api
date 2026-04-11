const mongoose = require('mongoose');

const connectDB = async () => {
 try{
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGODB_DB_NAME,
    });
    console.log(`MongoDB connected successfully to ${mongoose.connection.name}`);
 }
 catch(error){
    console.error("Error Connecting to MongoDB ",error.message);
    process.exit(1);
 }
};

module.exports = connectDB;