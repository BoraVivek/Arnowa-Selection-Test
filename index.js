//Requiring Express Package
const express = require('express');

//Initializing the express application  
const app = express();
const port = 8000; //Defining the port of application
//Requiring Express Layouts
const expressLayouts = require("express-ejs-layouts");

app.use(express.static("./public")); //Setting the folder through which we serve static files.

//Configure View Engine and Layouts
app.use(expressLayouts);
app.set("views", "./views");
app.set("view engine", "ejs");



app.use("/", require("./routes"));

// Listening to the defined port
app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server");
        return;
    }

    console.log("Server is up and running at port " + port);
})