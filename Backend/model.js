const {Schema , model} = require("mongoose") 


const todo = new Schema({
    title: String ,
    isCompleted: Boolean})

 const Todos=model('Todos',todo)
 module.exports=Todos