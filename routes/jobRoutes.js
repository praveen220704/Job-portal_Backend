const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");
const auth = require("../middleware/auth");

// define the routes or endpoints
jobRouter.post("/", auth.isAuth, auth.isAdmin, jobController.createJob);
jobRouter.get("/", auth.isAuth, jobController.getJobs);
jobRouter.get('/applied',auth.isAuth,jobController.getAppliedJobs);
jobRouter.get("/:jobId", auth.isAuth, jobController.getJob);
jobRouter.put("/:jobId", auth.isAuth, auth.isAdmin, jobController.updateJob);
jobRouter.delete(
  "/:id",
  auth.isAuth,
  auth.isAdmin,
  jobController.deleteJob
);

jobRouter.post('/:jobId/apply',auth.isAuth,jobController.applyJob);


module.exports=jobRouter;