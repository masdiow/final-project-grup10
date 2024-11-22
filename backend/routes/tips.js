const express = require("express");
const router = express.Router();
const listTipsdata = require("../datas/tips.json");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "data successfully fetched",
    status: 200,
    data: listTipsdata,
  });
});

// export the router module so that index.js file can use it
module.exports = router;
