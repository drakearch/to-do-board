const express = require('express');
const router = express.Router();

const database = require('../database')
const Task = require('../database/schemas/task');

router.get('/task', async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/task/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/task', async(req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json(task);
});

router.put('/task/:id', async(req, res) => {
    const { title, description } = req.body;
    const task = { title, description };
    await Task.findByIdAndUpdate(req.params.id, task);
    res.json({status: 'Task updated!'});
});

router.delete('/task/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task deleted!'});
});

module.exports = router;