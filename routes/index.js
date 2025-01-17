const express = require('express');
const router = express.Router();
const passport = require("passport");
const UserController = require("./../controller/userController");
const UserService = require('./../services/userService');
const UserInstance = new UserController( new UserService());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola passport");
});

router.post("/api/login", passport.authenticate("local"), function(req, res, next) {
  res.send("login");
})

router.get("/api/verify", function(req, res, next) {
  return res.json(req.user);
})

router.post('/create', function(req, res, next) {
  UserInstance.createUser(req, res);
})
module.exports = router;
