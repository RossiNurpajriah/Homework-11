const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Todo;