const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const LocalStartegy = require("passport-local").Strategy;

passport.use(new LocalStartegy({
    usernameField: 'email',
    passReqToCallback: true,
}, function(req, email, password, done){
    User.findOne({email: email}, function(err, user){
        if(err){
            req.flash("error", "Error with Authentication System");
            return done(err);
        }

        if(!user || !bcrypt.compareSync(password, user.password)){
            req.flash("error","Email/Password don't match")
            return done(null, false);
        }

        return done(null, user);
    })
}));

passport.serializeUser(function(user, done){
    done(null, user.id);
})

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("Erron in finding user");
            return done(err);
        }

        if(!user){
            console.log("User is not found");
        }

        return done(null, user);
    })
})

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect("/login");
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;