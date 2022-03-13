exports.homePage = function (req, res) {
    return res.render("homepage", {
        title: "Arnowa | Home",
        active: "home"
    })
}

exports.login = function (req, res) {
    return res.render("login", {
        title: "Arnowa | Login",
        active: "login"
    })
}

exports.register = function (req, res) {
    return res.render("register", {
        title: "Arnowa | Register",
        active: "register"
    })
}