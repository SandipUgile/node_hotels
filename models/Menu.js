const mongoose= require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name:{
    type:String,
    required : true
  },

  price:{
    type:Number,
    required: true
  },

  taste:{
    type:String,
    enum:['sweet','spicy','sour'],
    required: true
  },

  is_drink:{
    type:String,
    default:false
  },

  ingredients:{
    type:[String],
    default:[]
  },

  num_sale:{
    type:Number,
    default: 0
  }
})

const Menu = mongoose.model('Menu',MenuItemSchema);
module.exports = Menu;