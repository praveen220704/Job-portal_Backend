const mongoose = require("mongoose");

// define the company schema
const companySchema = new mongoose.Schema({
  name: String,
  location: String,
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  jobs:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Job"
  }]
});

// create the company model and export it
module.exports = mongoose.model("Company", companySchema, "companies");
