const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/auth/register", async (req, res) => {
  const { title, description, completed } = req.body;

  if (!title) {
    return res.status(400).send({ error: "Title required!" });
  }

  if (completed === undefined) {
    return res.status(400).send({ error: "Completed required!" });
  }

  const newTask = await Task.create({
    title: title,
    description: description,
    completed: completed,
  });

  const tasks = await Task.findAll();

  return res.status(201).send({ tasks, msg: "Task created!" });
});

router.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll();

  return res.status(200).send({ tasks });
});

router.get("/task/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ error: "Id required!" });
  }

  const task = await Task.findOne({
    where: {
      id: id,
    },
  });

  if (!task) {
    return res.status(404).send({ error: "Task not found!" });
  }

  return res.status(200).send({ task });
});

router.put("/task/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ error: "Id required!" });
  }

  await Task.update(
    { title: title, description: description, completed: completed },
    {
      where: {
        id: id,
      },
    }
  );

  const tasks = await Task.findAll();

  return res.status(200).send({ tasks, msg: "Updated task successfully!" });
});

router.delete("/task/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ error: "Id required!" });
  }

  await Task.destroy({
    where: {
      id: id,
    },
  });

  const tasks = await Task.findAll();

  return res.status(200).send({ tasks, msg: "Deleted success!" });
});

module.exports = router;
