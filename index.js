//Requiring Express Package
const express = require('express');

//Initializing the express application  
const app = express();
const port = 8000;



app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server");
        return;
    }

    console.log("Server is up and running at port " + port);
})