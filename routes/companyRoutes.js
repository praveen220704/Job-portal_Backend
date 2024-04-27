const express = require("express");
const companyRouter = express.Router();
const companyController = require("../controllers/companyControllers");
const auth = require("../middleware/auth");

// define the company routes
companyRouter.post(
  "/",
  auth.isAuth,
  auth.isAdmin,
  companyController.createCompany
);
companyRouter.get(
  "/",
  auth.isAuth,
  auth.isAdmin,
  companyController.getCompanies
);
companyRouter.get(
  "/:companyId",
  auth.isAuth,
  auth.isAdmin,
  companyController.getCompany
);
companyRouter.put(
  "/:companyId",
  auth.isAuth,
  auth.isAdmin,
  companyController.updateCompany
);
companyRouter.delete(
  "/:companyId",
  auth.isAuth,
  auth.isAdmin,
  companyController.deleteCompany
);

// export the company routes
module.exports = companyRouter;
