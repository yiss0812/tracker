const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

day: Date,
exercises: [
  {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]

});
    const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;