const { data } = require("autoprefixer");
const ChartData = require("../models/chartModel");
const User = require("../models/userModel");

exports.dashboard = async function (req, res) {

    let chartData = await ChartData.find({ user: req.user._id });

    let growthChart = chartData.filter((data) => {
        return data.type === 'growth';
    }).map((data) => {
        return {
            country: data.country,
            value: data.value,
        };
    });

    let lossChart = chartData.filter((data) => {
        return data.type === 'loss';
    }).map((data) => {
        return {
            country: data.country,
            value: data.value,
        };
    });

    return res.render("dashboard", {
        title: "User Dashboard",
        active: "dashboard",
        growthChart: growthChart,
        lossChart: lossChart
    });
}

exports.createUser = async function (req, res) {

    try {
        if (req.body.password !== req.body.confirm_password) {
            req.flash("error", "Password and Confirm Password should be same");
            return res.redirect("back");
        }

        let user = await User.findOne({ email: req.body.email });

        if (user) {
            req.flash("error", "User already exists with this email address");
            return res.redirect("back");
        }

        //Creating User
        user = await User.create(req.body);

        //Creating Random Chart Data for User
        await ChartData.insertMany(
            [
                {
                    country: "india",
                    type: "growth",
                    value: Math.round((Math.random() * 1000) + 1),
                    user: user._id,
                },
                {
                    country: "oman",
                    type: "growth",
                    value: Math.round((Math.random() * 1000) + 1),
                    user: user._id,
                },
                {
                    country: "us",
                    type: "growth",
                    value: Math.round((Math.random() * 1000) + 1),
                    user: user._id,
                },

                {
                    country: "india",
                    type: "loss",
                    value: Math.round((Math.random() * 1000) + 1),
                    user: user._id,
                },
                {
                    country: "oman",
                    type: "loss",
                    value: Math.round((Math.random() * 1000) + 1),
                    user: user._id,
                },
                {
                    country: "us",
                    type: "loss",
                    value: Math.round((Math.random() * 1000) + 1),
                    user: user._id,
                },
            ]
        )

        req.flash("success", 'Account created Successfully');
        return res.redirect("/login");
    } catch (err) {
        console.log("Error: ", err.message)
    }


}

exports.createSession = function (req, res) {
    req.flash("success", "Logged in Successfully");
    return res.redirect("/users/dashboard");
}