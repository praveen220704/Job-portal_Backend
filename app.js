// require express
const express = require("express");

// import the user routes
const userRouter = require("./routes/userRoutes");

// create an express app
const app = express();

// use the express json middleware
app.use(express.json());

// define the endpoints
app.use("/api/users", userRouter);

// export the app module
module.exports = app;
