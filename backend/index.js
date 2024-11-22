// Example using Express.js
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// Include route files
const companiesRoute = require("./routes/companies");
const tipsroute = require("./routes/tips");

// Use routes
app.use("/api/companies", companiesRoute);
app.use("/api/tips", tipsroute);

// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});