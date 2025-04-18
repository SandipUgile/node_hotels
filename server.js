// function callback(){
//   console.log('server file is running')
// }

// const add= function(a,b){
//   var result= a+b;
//   console.log(result)
//   callback()
// }

// add(2,3)


// const { Console } = require('console');
// let fs=require('fs')
// let os=require('os')

// let user = os.userInfo();
// console.log(user);

// //FOR GIVING GREETING MSG
// fs.appendFile('','HIIIII',()=>{
//   console.log('FILE IS CREATED')
// });

// Console.log(fs)

// let notes=require('notes.js') NOT ALLOWED
// let notes=require('./notes.js')
// console.log(notes.age);

// let result=notes.add(23,23)
// console.log(result);

const express = require('express')
const db = require('./db');
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.send('Hey there HOW can i help you!!!!!')
})

// Importing Router
const personRoutes =require('./routes/personRoutes');
app.use('/',personRoutes);
const menuRoutes =require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
  console.log('Server Is listening');
})