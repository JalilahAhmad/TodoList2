const mongoose=require('mongoose')

const dbURL='mongodb://localhost:27017/TodoListV01'

mongoose.connect(dbURL)

//Exstra

const db=mongoose.connection

db.on('error',(err)=>{
   console.log("ERROR IN MONGODB")
});

db.on('connected',(err)=>{
   console.log("MONGODB IS CONNECTED")
});
