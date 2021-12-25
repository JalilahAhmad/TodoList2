const express = require("express");
const db = require('./db');
const app = express()
const todo= require('./model')

app.use(express.json())



app.get ('/',(req,res)=>{

res.json("its working")
})


app.get ('/data',(req,res)=>{
todo.find({},(err,data)=>{
    if(err){
        console.log('error')
    }else{
        res.json(data)
    }
    })
})

app.post('/post',(req,res)=>{
todo.create(req.body,(err,newData)=>{
    if(err){
       res.json('error post')
    }else{
        res.status(201).json('create successfuly')
    }
})
})


app.delete('/delete',(req,res)=>{
    todo.deleteOne({},(err)=>{
        if(err){
            res.json("error")
        }else{
            res.status(201).json('delete successfuly')
        }
    });   
})


app.put('/put',(req,res)=>{
    todo.updateOne({},req.body,(err)=>{
        if(err){
            res.json("error")
        }else{
            res.status(201).json('update successfuly')
        }
    })
})

//endpoints




app.listen(5000,()=>{
console.log("SERVER Is WORKING")
})

