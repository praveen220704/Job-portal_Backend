// import the express router
const express = require("express");

// import the user controller
const userController = require("../controllers/userController");
const auth=require('../middleware/auth')

// import the express router
const userRouter = express.Router();

// define the endpoints
userRouter.post("/", userController.register);
userRouter.post("/login", userController.login);

// authenticated route
userRouter.get("/me", auth.isAuth, userController.me);
userRouter.put("/me", auth.isAuth, userController.update);
userRouter.delete("/me", auth.isAuth, userController.delete);
userRouter.get("/logout", auth.isAuth, userController.logout);

// export the router
module.exports = userRouter;
