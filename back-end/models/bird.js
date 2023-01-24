const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birdSchema = new Schema(
  {
    species: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    },
    location: {
      type: String,
      require: true
    },
    dateOfCatch: {
      type: Date,
      default:Date.now,
      require: true
    },
    authorName: {
      type: String,
      require:true,
    },
    image: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bird",birdSchema ); 
