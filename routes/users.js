const express = require("express");
const router = express.Router();
const passport = require('passport');

const usersController = require("../controllers/usersController");

router.get("/dashboard", passport.checkAuthentication ,usersController.dashboard);

router.post("/create-session", passport.authenticate("local", {
    failureRedirect: "/login"
}), usersController.createSession);

router.post("/create-account", usersController.createUser);

module.exports = router;