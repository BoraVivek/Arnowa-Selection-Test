const express = require("express");

const router = express.Router();

router.get("/");
router.use("/users", require("./users"));

module.exports = router;
