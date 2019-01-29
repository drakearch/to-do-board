const express = require('express');
const router = express.Router();

const database = require('../database')
const Todo = require('../database/schemas/todo');

router.get('/todo', async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

router.get('/todo/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
});

router.post('/todo', async(req, res) => {
    const { title, description, responsible, priority } = req.body;
    const todo = new Todo({ title, description, responsible, priority });
    await todo.save();
    res.json(todo);
});

router.put('/todo/:id', async(req, res) => {
    const { title, description, responsible, priority } = req.body;
    const todo = { title, description, responsible, priority };
    await Todo.findByIdAndUpdate(req.params.id, todo);
    const updated_todo = await Todo.findById(req.params.id);
    res.json(updated_todo);
});

router.delete('/todo/:id', async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({deleted: true});
});

module.exports = router;