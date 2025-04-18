const mongoose = require("mongoose");
require('dotenv').config();

//const mongoURL = 'mongodb://localhost:27017/hotels'; // BEFORE USING .env file 
//const mongoURL = process.env.DB_URL_LOCAL; //after using .env file
const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser :true,
  useUnifiedTopology : true
});

const db = mongoose.connection;

db.on('connected' , () => {
  console.log('Db connected');
})

db.on('error' , () => {
  console.log('Db error');
})

db.on('disconnected' , () => {
  console.log('Db disconnected');
})

module.exports = db;