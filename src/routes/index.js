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
    const { title, description, responsible, priority } = req.body;
    const task = new Task({ title, description, responsible, priority });
    await task.save();
    res.json(task);
});

router.put('/task/:id', async(req, res) => {
    const { title, description, responsible, priority } = req.body;
    const task = { title, description, responsible, priority };
    await Task.findByIdAndUpdate(req.params.id, task);
    const updated_task = await Task.findById(req.params.id);
    res.json(updated_task);
});

router.delete('/task/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({deleted: true});
});

module.exports = router;