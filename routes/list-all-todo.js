const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

module.exports = router;