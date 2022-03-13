const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("homepage", {
        title: "Homepage"
    })
});

router.get("/login", function (req, res) {
    res.render("login", {
        title: "Login"
    });
})



router.use("/users", require("./users"));

module.exports = router;
