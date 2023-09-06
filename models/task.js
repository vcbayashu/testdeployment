const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskname: {
      type: String,
    },
    taskdescription: {
      type: String,
    },
    taskstatus: {
      type: String,
      enum: ["TO_DO", "ON_GOING", "COMPLETED"],
    },
    duedate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
