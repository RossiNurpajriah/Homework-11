const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
});

module.exports = router;