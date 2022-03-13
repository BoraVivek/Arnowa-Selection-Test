//Requiring Express Package
const express = require('express');

//Initializing the express application  
const app = express();
const port = 8000; //Defining the port of application
//Requiring Express Layouts
const expressLayouts = require("express-ejs-layouts");

app.use(express.static("./public")); //Setting the folder through which we serve static files.

//Configure View Engine and Layouts
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('layout extractStyles', true); //Extract styles from sub-pages into the layout
app.set('layout extractScripts', true); //Extract scripts from sub-pages into the layout




//Setting up Router
app.use("/", require("./routes"));

// Listening to the defined port
app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server");
        return;
    }

    console.log("Server is up and running at port " + port);
})