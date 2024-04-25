//import the mongoose module
const mongoose=require('mongoose');

console.log('Connecting to MongoDB...');

//Connect to MongoDB using mongoose
mongoose.connect(`mongodb+srv://praveenprasath499:Praveens007@cluster0.72zzvmt.mongodb.net/`)
.then(()=>{
    console.log('Connected to MongoDB...');
})
.catch((error)=>{
    console.log('Error connecting to MongoDB...',error,message);
})