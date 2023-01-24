const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
//mongoose.connect(process.env.CONECTION_STRING)


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.CONECTION_STRING)
      console.log(`mongoDB connected successfully:${conn.connection.host}`.cyan);
    } 
    catch (error) {
      console.log(error);
    }
  }
  
  module.exports =  connectDB 