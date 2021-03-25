const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
  Task,
};
