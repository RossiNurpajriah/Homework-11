const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.post('/', async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

module.exports = router;