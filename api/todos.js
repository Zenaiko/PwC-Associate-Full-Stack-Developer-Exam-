//1. REST Endpoint: Create Todo (Node + Express)
// Implement a POST /api/todos that do the following:
// - Validates body, where title is non-empty
// - Creates an in-memory todo {id,title,done,createdAT}
// - Returns 201 whith the created todo.
// - Invalid Input, return 400 with {error code}

//Dependencies
const express = require("express");
const app = express.Router();
app.use(express.json());

//Initializing the Todo structure
let toDos = [];
class toDoStruct {
  constructor(title) {
    this.id = toDos.length + 1;
    this.title = title;
    this.done = false;
    this.createdAT = new Date();
  }
}

app.route("/").post((req, res) => {
  const data = req.body;
  const title = data.title;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  let addedTodo = new toDoStruct(title);
  toDos.push(addedTodo);
  return res.status(201).json(addedTodo);
});

module.exports = app;
