const express = require("express");
const Student = require("./models/Student");

const app = express();

// middleware
app.use(express.json());

// Routes

// Get all the students
app.get("/students", async (req, res) => {
  // write your codes here
  res.send(JSON.stringify(Student));
});

// Add student to database
app.post("/students", async (req, res) => {
  // write your codes here
  let name = req.body.name;
  let age = req.body.age;
  let Class = req.body.class;
  let sex = req.body.sex;
  let grade_point = req.body.grade_point;
  if (!name && !age && !Class && !sex && !grade_point) {
    res.status(404).send("Error");
    return;
  }
  let obj = { name, age, Class, sex, grade_point };
  Student.push(JSON.stringify(obj);
});

// Get specific student
app.get("/students/:id", async (req, res) => {
  // write your codes here
  let id = req.params.id;
  let student = Student.find((el) => el.id === parseInt(id));
  if (!student) {
    res.status(404).send("Error");
    return;
  }
  res.send(JSON.stringify(student));
});

// delete specific student
app.delete("/students/:id", async (req, res) => {
  // write your codes here
  let id = req.params.id;
  let student = Student.find((el) => el.id === parseInt(id));
  if (!student) {
    res.status(404).send("Error");
    return;
  }
  let copy = { ...Student };
  copy.remove(student);
  res.send(JSON.stringify(copy));
});

module.exports = app;
