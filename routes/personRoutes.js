const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/person',async (req,res) =>{
  try{
    const  data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error'})
  }

})

router.get('/getperson',async (req,res) =>{
  try{
    const data = await Person.find();
    console.log('Data Fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error'})
  }

  router.get('/person/:workType', async(req, res)=> {
    try{
      const workType = req.params.workType;
      if(workType == 'Chef' || workType == 'Owner' || workType == 'Worker')
      {
        const response = await Person.find({work : workType});
        console.log('Data saved');
        res.status(200).json(response);
      }else{
        console.log("Invalid Worktype")
      }
  
    }catch(err){
      console.log(err);
      res.status(500).json({error :'Internal server error'})
    }

  })
})

router.put('/person/:id',async (req ,res) => {
  try{
    const personid = req.params.id;
    const person_to_update = req.body;

    const response = await Person.findByIdAndUpdate(personid , person_to_update , {
      new : true, //updated record u will get if false then u get document before update
      runValidators : true
    })

    console.log('Record Updated successfully');
    res.status(200).json(response);
  }catch(err){
      console.log(err);
      res.status(500).json({error :'Internal server error'})
    }
})

router.delete('/person/:id', async (req , res)=> {
  try{
    const id = req.params.id;
    const response = await Person.findOneAndDelete(id);

    if(!response)
    {
      res.status(404).json({error :'Record no found'});
    }

    console.log('Record deleted successfully');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error'})
  }
})

module.exports = router ;
