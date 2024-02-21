const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  await todo.destroy();
  res.json({ message: 'Todo deleted' });
});

module.exports = router;