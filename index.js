//import the mongoose module
const mongoose=require('mongoose');

//import the config module
const config=require('./utils/config');

// import the app module
const app=require('./app');

console.log('Connecting to MongoDB...');

//Connect to MongoDB using mongoose
mongoose.connect(config.MongoDB_URI)
.then(()=>{
    console.log('Connected to MongoDB...');

    // start the server
app.listen(config.PORT,()=>{
    console.log(`server running on port ${config.PORT}`);
}
)
})
.catch((error)=>{
    console.log('Error connecting to MongoDB...',error,message);
})

