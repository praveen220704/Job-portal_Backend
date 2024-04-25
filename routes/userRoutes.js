// import the express router 
const express = require('express');

// import the user controller
const userController=require('../controllers/userController')

// import the express router 
const userRouter=express.Router();

// define the endpoints
userRouter.post('/',userController.register);

// export the router 
module.exports=userRouter;