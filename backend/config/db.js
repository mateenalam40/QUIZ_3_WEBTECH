import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// require('dotenv').config({env});
// process.env.MONGO_URL
// 'mongodb+srv://mat:mat@cluster0.wvduz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://mat:mat@cluster0.beber.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
