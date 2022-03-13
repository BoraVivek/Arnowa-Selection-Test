//Requiring Express Package
const express = require('express');

//Initializing the express application  
const app = express();
const port = 8000; //Defining the port of application
const db = require('./config/mongoose');
var flash = require('connect-flash');
//Requiring Express Layouts
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { setFlash } = require('./middleware/flashMiddleware');

const passport = require("passport");
const LocalStartegy = require("./config/passport-local-strategy");

app.use(session({ 
    name: "arnowa",
    secret: "arnowa_test",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 },
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost/arnowa",
        autoRemove: "disabled"
    })
}));
app.use(flash());

app.use(express.urlencoded({extended: false}));
app.use(express.static("./public")); //Setting the folder through which we serve static files.

//Configure View Engine and Layouts
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('layout extractStyles', true); //Extract styles from sub-pages into the layout
app.set('layout extractScripts', true); //Extract scripts from sub-pages into the layout

// Middleware for Setting Flash Value accessible in Views
app.use(setFlash);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

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