var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var admin = require("../models/admin.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  admin.all(function(data) {
    var hbsObject = {
      admins: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  admin.create([
      "name",
      "email",
      "address",
      "google_place_id",
      "non_profit_id"
  ], [
          req.body.name,
          req.body.email,
          req.body.address,
          req.body.google_place_id,
          req.body.non_profit_id
  ], function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = router;
