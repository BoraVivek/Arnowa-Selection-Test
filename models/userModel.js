const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: [true, "Account already exists with this email address"],
        set: v => v.toLowerCase()
    },
    password: {
        type: String,
        required: true,
        set: v => bcrypt.hashSync(v, 10)
    }
}, {
    timestamps: true,
});


const User = mongoose.model("User", userSchema);

module.exports = User;