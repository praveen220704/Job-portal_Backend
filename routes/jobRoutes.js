const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");
const auth = require("../middleware/auth");

// define the routes or endpoints
jobRouter.post("/jobs", auth.isAuth, auth.isAdmin, jobController.createJob);
jobRouter.get("/jobs", auth.isAuth, jobController.getJobs);
jobRouter.get("/jobs/:id", auth.isAuth, jobController.getJob);
jobRouter.put("/jobs/:id", auth.isAuth, auth.isAdmin, jobController.updateJob);
jobRouter.delete(
  "/jobs/:id",
  auth.isAuth,
  auth.isAdmin,
  jobController.deleteJob
);

// jobRouter.post('/jobs/:id/apply',auth.isAuth,jobController.applyJob);
// jobRouter.get('/jobs/:id/applied',auth.isAuth,auth.isAdmin,jobController.getAppliedJobs);

module.exports=jobRouter;