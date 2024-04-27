// import mongoose
const mongoose= require('mongoose');

// create a schema
const userSchema=new mongoose.Schema({
    username:String,
    passwordHash:String,
    name:String,
    location:{
        type:String,
        default:'Unknown'
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
});

// create a model from the schema and export it
module.exports=mongoose.model('User',userSchema,'users');
