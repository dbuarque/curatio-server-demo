const express = require("express"),
  bodyParser = require("body-parser"),
  http = require("http"),
  path = require("path"),
  cors = require("cors"),
  uuid = require('uuid/v4');

const app = (module.exports = express());
app.set("port", process.env.PORT || 8000);

// generate new token middleware
app.use(function (req, res, next) {
  const token = uuid(); // request token from server mock
  res.set('X-CURATIO-TOKEN', token);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Redirect all non api requests to the index
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Starting express server
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
