const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const User = require("../models/user");

const auth = {
  isAuth: (request, response, next) => {
    try {
      // get the token from the request cookies
      const token = request.cookies.token;

      // if the token is not present, return an error message
      if (!token) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      // verify the token
      try {
        const decodedToken = jwt.verify(token, config.JWT_SECRET);

        // get the user id from the decoded token and attach it to the request object
        request.userId = decodedToken.id;

        // call the next middleware
        next();
      } catch (error) {
        response.status(401).json({ message: "Invalid token" });
      }
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

// export the auth middleware
module.exports = auth;
