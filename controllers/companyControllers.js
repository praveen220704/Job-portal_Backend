// import the company model
const Company = require("../models/company");

// import the user module
const User = require("../models/user");

// define the company controller
const companyController = {
  // create a company
  createCompany: async (request, response) => {
    try {
      // get the company inputs from the request body
      const { name, location } = request.body;

      // get the user id from the request object
      const { userId } = request;

      // create a new company
      const newCompany = new Company({
        name,
        location,
        createdBy: userId,
      });

      // save the company
      const savedCompany = await newCompany.save();

      // return a success message with the saved company
      response.status(201).json({
        message: "Company created succesfully",
        company: savedCompany,
      });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  // get all companies
  getCompanies: async (request, response) => {
    try {
      // get all companies
      const companies = await Company.find();

      // return the companies
      response.status(200).json(companies);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  // get a company
  getCompany: async (request, response) => {
    try {
      // get the company id from the request params
      const { companyId } = request.params;

      // get the company by id
      const company = await Company.findById(companyId);

      // return the company
      response.status(200).json(company);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  // update a company
  updateCompany: async (request, response) => {
    try {
      // get the company id from the request object
      const { companyId } = request.params;

      const updatedCompany = await Company.findByIdAndUpdate(
        companyId,
        request.body,
        { new: true }
      );

      // return a success message with the updated company
      response
        .status(200)
        .json({
          message: "Company updated successfully",
          company: updatedCompany,
        });
    } catch (error) {
        response.status(500).json({message:error.message});
    }
  },

  // delete a company
  deleteCompany:async(request,response)=>{
    try{
        // get the company id from the request params
        const {companyId}=request.params;

        // delete the company
        await Company.findByIdAndDelete(companyId);

        // return a success message
        response.status(200).json({message:'Company deleted successfully'});
    }catch(error){
        response.status(500).json({message:error.message});
    }
  }
};

// ecport the company controller
module.exports = companyController;
