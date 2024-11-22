// routes/companies.js
const express = require("express");
const router = express.Router();
const listCompaniesData = require("../datas/companies.json");

// Define a route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "data successfully fetched",
    status: 200,
    data: listCompaniesData,
  });
});

// export the router module so that index.js file can use it
module.exports = router;
