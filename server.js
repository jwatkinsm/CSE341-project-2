const express = require("express");
// to parse json data
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const app = express();
const port = process.env.PORT || 8080;

// Use body-parser middleware to parse JSON data
// Use body-parser middleware to parse JSON data
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./Routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
