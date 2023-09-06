const express = require("express");
const { ConnectDB } = require("./Connection");
const app = express();
const TASK_MODEL = require("./models/task");
app.use(express.json());
const path = require("path");
require("dotenv").config();

// Create Operation
app.post("/api/addtask", async (req, res) => {
  try {
    const newTask = {
      taskname: req.body.newTaskTitle,
      taskdescription: req.body.newtaskDescription,
      taskstatus: req.body.taskstatus,
      duedate: req.body.newtaskdueDate,
    };
    const saveTask = new TASK_MODEL(newTask);
    await saveTask.save();
    return res
      .status(200)
      .json({ success: true, message: "Task saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

//Read Operation
app.get("/api/gettasks", async (req, res) => {
  try {
    const tasks = await TASK_MODEL.find().sort({ createdAt: -1 }).limit(5);
    return res.status(200).json({
      success: true,
      tasks: tasks,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

//Update

//Delete operation
app.delete("/api/delete/:id", async (req, res) => {
  try {
    await TASK_MODEL.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// update operation
app.post("/api/updatetask/:id", async (req, res) => {
  try {
    await TASK_MODEL.findByIdAndUpdate(req.params.id, {
      taskstatus: req.body.taskstatus,
    });
    return res.json({ success: true, message: "Task updated successfully" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// const PORT = 5000;
const PORT = process.env.PORT || 5000;
ConnectDB();

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "/client/build/index.html"),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
});
app.listen(PORT, () => console.log("Server is running at Port", PORT));
