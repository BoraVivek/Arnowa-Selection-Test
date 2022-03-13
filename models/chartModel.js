const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['growth', 'loss'],
    },
    value: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true,
})

const ChartData = mongoose.model("ChartData", chartSchema);

module.exports = ChartData;