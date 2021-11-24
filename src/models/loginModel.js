const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const loginSchema = new mongoose.Schema(
  {
    name: String,
    password: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Login", loginSchema);
