const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // birthday: {
  //   type: Date,
  //   required: true,
  // },
  // gender: {
  //   type: String,
  //   required: true,
  // },
  // weight: {
  //   type: Number,
  //   required: true,
  // },
  // height: {
  //   type: Number,
  //   required: true,
  // },
  // bodyfat: {
  //   type: Number,
  //   required: true,
  // },
  number: {
    type: Number,
    required: true,
  },
  // notes: {
  //   type: String,
  // },
});

module.exports = Client = mongoose.model("client", ClientSchema);
