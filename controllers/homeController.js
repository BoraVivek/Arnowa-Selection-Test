exports.homePage = function (req, res) {
    return res.render("homepage", {
        title: "Arnowa | Home",
        active: "home"
    })
}

exports.login = function (req, res) {

    if(req.isAuthenticated()){
        return res.redirect("/users/dashboard");
    }

    return res.render("login", {
        title: "Arnowa | Login",
        active: "login"
    })
}

exports.logout = function(req, res){
    req.flash("success", "Logged out successfully");
    req.logout();
    return res.redirect("/");
}

exports.register = function (req, res) {

    if(req.isAuthenticated()){
        return res.redirect("/users/dashboard");
    }

    return res.render("register", {
        title: "Arnowa | Register",
        active: "register"
    })
}