require("./database/db")

const express = require("express");
const bodyParser = require("body-parser"); // Correct import for bodyParser
const routes = require("./Form_data/router");
const rateLimit = require("express-rate-limit");

const app = express();


const limiter = rateLimit({
  windowMs:6000, 
  max: 10, 
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);


app.use(bodyParser.json());
app.use("/classwork",routes);



module.exports=app;
