const mongoose = require("mongoose");

var imgSchema = new mongoose.Schema({
    image_url: String,
    date: String
});

module.exports = mongoose.model("Image", mongoose);