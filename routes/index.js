var express = require('express');
var router = express.Router();
var todos = require('../data/todos')

module.exports = router;

/* GET todos */
router.get('/', index);

function index(req, res, next) {
  console.log(todos);
  res.render('index', { title: 'Unit 2 Assessment', todos: todos })
}

/* Add an item */
router.post('/', addItem);

function addItem(req, res, next) {
  todos.push({item: req.body.todo, done: false})
  res.redirect('/');
}
