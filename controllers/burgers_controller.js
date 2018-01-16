var express = require("express");
var router = express.Router();

// Import the model
var db = require("../models");

// Create routes and set up logic
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(dbPost) {
    var hbObject = {
      burgers: dbPost
    };
    res.render("index", hbObject);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
  });
});

// Export routes for server.js to use.
module.exports = router;
