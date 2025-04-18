const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');

router.post('/',async(req,res) =>{
  try{
    const data =req.body;
    const newItem = new Menu(data);
    const response =await newItem.save();
    console.log('Data saved');
    res.status(200).json(response);
}catch(err){
  console.log(err);
  res.status(500).json({error :'Internal server error'})
}
})

router.get('/',async (req,res) =>{
  try{
    const data = await Menu.find();
    console.log('Data Fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error'})
  }

})

router.get('/:tasteType',async (req,res) =>{
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == 'sweet' || tasteType == "sour" || tasteType == "spicy")
    {
      const response =await Menu.find({taste : tasteType});
      console.log('Data Fetched');
      res.status(200).json(response);
    }else{
      console.log("Invalid TasteType")
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error'})
  }

})

module.exports = router ;