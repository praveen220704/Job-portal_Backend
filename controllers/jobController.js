// import Job model
const Job=require('../models/job')

// import User model
const User=require('../models/user')

// import the company model
const Company = require("../models/company");

// create the job controller object
const jobController={
    // create a new job
    createJob: async (req, res) => {
        try {
            // get the user id from the request object
            const userId = req.userId;

            // get the company id from the request object
            const companyId = req.body.companyId;

            // create a new job object
            const newJob = new Job({
                title: req.body.title,
                description: req.body.description,
                location: req.body.location,
                type: req.body.type,
                company: companyId,
                createdBy: userId
            });

            // save the job object
            const job = await newJob.save();

            // push the job id to the company's jobs array
            const company = await Company.findByIdAndUpdate(companyId, {
                $push: {
                    jobs: job._id
                }
            });

            // send the job object as the response
            res.status(201).json({ message: 'Job created successfully', job });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    },
    // method to get all jobs
    getJobs: async (req, res) => {
        try {
            // get all jobs
            const jobs = await Job.find();

            // send the jobs as the response
            res.status(200).json(jobs);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    },
    // method to get a single job
    getJob: async (req, res) => {
        try {
            // get the job id from the request object
            const jobId = req.params.jobId;

            // get the job
            const job = await Job.findById(jobId);

            // send the job as the response
            res.status(200).json(job);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    },
    // update a job
    updateJob: async (req, res) => {
        try {
            // get the job id from the request object
            const jobId = req.params.jobId;

            // update the job
            const job = await Job.findByIdAndUpdate(jobId, req.body, {
                new: true
            });

            // send the updated job as the response
            res.status(200).json(job);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    },
    // delete a job
    deleteJob: async (req, res) => {
        try {
            // get the job id from the request object
            const jobId = req.params.jobId;

            // delete the job
            await Job.findByIdAndDelete(jobId);

            // send a success message as the response
            res.status(200).json({
                message: 'Job deleted successfully'
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    },
};

// export the job controller object
module.exports=jobController;