const mongoose = require("mongoose");

//Loading Environment File
const env = require('../config/environment');

mongoose.connect(`${env.db}`);

let db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
    console.log("Connected to Database :: MongoDB");
 });
 
 module.exports = db;