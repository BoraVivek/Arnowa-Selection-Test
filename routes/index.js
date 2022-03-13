const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("homepage", {
        title: "Homepage"
    })
});
router.use("/users", require("./users"));

module.exports = router;
