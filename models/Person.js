const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },

  age:{
    type:Number
  },

  email:{
    type:String,
    required: true,
    unique : true
  },

  salary: {
    type:Number
  } ,

  work: {
    type: String,
    enum :['Chef','Owner','Worker'],
    required:true
  },

  mobile : {
    type:Number,
    required : true
  }
});

const Person = mongoose.model('Person' , personSchema);
module.exports = Person;