const express = require('express');
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola passport");
});

router.post("/api/login", passport.authenticate("local"), function(req, res, next) {
  res.send("login");
})

router.get("/api/verify", function(req, res, next) {
  res.json({
    ok: true
  })
})
module.exports = router;