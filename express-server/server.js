const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3500;

const taskData = [
  {
    id: "1",
    task: "Create React App",
    desc: "Create a react project using command shown in tutorial.",
    owner: "Mohit",
    priority: "High",
    lastUpdated: new Date().toLocaleString(),
    status: "Completed",
  },
  {
    id: "2",
    task: "Create Layout",
    desc: "Draw a rough sketch what you are going to make",
    owner: "Mohit",
    priority: "Medium",
    lastUpdated: new Date().toLocaleString(),
    status: "Completed",
  },
  {
    id: "3",
    task: "Create skeleton",
    desc: "Create skeleton of the application using HTML CSS",
    owner: "Mohit Yadav",
    priority: "Low",
    lastUpdated: new Date().toLocaleString(),
    status: "Completed",
  },
  {
    id: "4",
    task: "Add interactivity",
    desc: "Now make the static website dynamic using javascript and React",
    owner: "Mohit Yadav",
    priority: "High",
    lastUpdated: new Date().toLocaleString(),
    status: "Pending",
  },
  {
    id: "5",
    task: "Implement CRUD",
    desc: "Implement CRUD operations on the data",
    owner: "Mohit",
    priority: "High",
    lastUpdated: new Date().toLocaleString(),
    status: "Pending",
  },
  {
    id: "6",
    task: "Add authentication",
    desc: "Add authentication to the application",
    owner: "Mohit Yadav",
    priority: "Medium",
    lastUpdated: new Date().toLocaleString(),
    status: "Pending",
  },
  {
    id: "7",
    task: "Deploy Application",
    desc: "Deploy the application on a hosting platform",
    owner: "Mohit Yadav",
    priority: "Low",
    lastUpdated: new Date().toLocaleString(),
    status: "Pending",
  },
];

// Enable CORS with specific options

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send(taskData);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  let task = taskData.find((task) => task.id === id);

  if (!task) {
    res.status(404).send("Task not found");
  }

  const index = taskData.indexOf(task);
  taskData.splice(index, 1);
  res.send(task.id);
});

app.post("/tasks", (req, res) => {
  const body = req.body;

  if (!req.body) {
    res.status(400).send("Task is required");
  }
  const data = {
    id: body.id,
    task: body.task,
    desc: body.desc,
    owner: body.owner,
    priority: body.priority,
    lastUpdated: body.lastUpdated,
    status: body.status,
  };

  taskData.push(data);
  res.send(data);
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  let task = taskData.find((task) => task.id === id);

  if (!task) {
    res.status(404).send("Task not found");
  }

  task.task = body.task;
  task.desc = body.desc;
  task.owner = body.owner;
  task.priority = body.priority;
  task.lastUpdated = body.lastUpdated;
  task.status = body.status;

  res.send(task);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
