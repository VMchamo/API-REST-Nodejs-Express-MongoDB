const { request } = require('express');
const express = require('express');
const task = require('../models/Task');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (req, res) => {
    res.send('Estamos en Tasks')
});


router.post('/', async (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description
    });
    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.json( { message: err} )
    }
});

router.get('/:TaskId', async (req, res) => {
    try {
        const task = Task.findById(req.params.taskId);
        res.json(task);
    } catch (err) { 
        res.json( { message: err });
    }
});

// Delete Task
router.delete('/:taskId', async (req, res) => {
    try {
    const removeTask = await task.remove( {_id: req.params.taskId});
    res.json(removedTask);
    }catch (err){
        res.json( { message: err });
    }
});

// Update Task
router.patch('/:taskId', async (req, res) => {
    try {
    const updateTask = await task.updateOne( {_id: req.params.TaskId}, {$set: {name: req.body.name} }
    );
    res.json(updateTask);
    } catch (err) {
        res.json( { message: err });
    }
}); 
module.exports = router;