const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/hotels';

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