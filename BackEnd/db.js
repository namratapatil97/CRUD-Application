const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/batch_twelve");

module.exports = mongoose;