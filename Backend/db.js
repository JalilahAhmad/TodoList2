const mongoose =require("mongoose");
const url="mongodb://localhost:27017/TodoListV02"
mongoose.connect(url);

const db =mongoose.connection;
db.on('error',(err)=>{
    console.log("ERROR In DB CONNECTION")
})

db.on('connected',(err)=>{
    console.log("DB CONNECTION")
})