const mongoose=require('mongoose')

// define the job schema
const JobSchema=new mongoose.Schema({
    title:String,
    description:String,
    location:String,
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['Open','Closed'],
        default:'Open'
    },
    type:{
        type:String,
        enum:['full-time','part-time','contract','freelance'],
        default:'full-time'
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    applicants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
});

// create the model and export it
module.exports=mongoose.model('Job',JobSchema,'jobs');