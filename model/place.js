const { default: mongoose, model, Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const Place_Schema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: [true, "the name is require"],
      unique: true,
    }
},
  { timestamps: true }
);
const Place = Place_Schema;
module.exports = mongoose.model("Place", Place);