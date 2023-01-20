const { request } = require('express');
const express = require('express');
const users = require('../models/Users');
const router = express.Router();
const User = require('../models/Users');

router.get('/', (req, res) => {
    res.send('Estamos en Users')
});


router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        address: req.body.address
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json( { message: err} )
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const user = User.findById(req.params.userId);
        res.json(user);
    } catch (err) { 
        res.json( { message: err });
    }
});

// Delete User
router.delete('/:userId', async (req, res) => {
    try {
    const removeUser = await users.remove( {_id: req.params.userId});
    res.json(removedUser);
    }catch (err){
        res.json( { message: err });
    }
});

// Update User
router.patch('/:userId', async (req, res) => {
    try {
    const updateUser = await users.updateOne( {_id: req.params.userId}, {$set: {name: req.body.name} }
    );
    res.json(updateUser);
    } catch (err) {
        res.json( { message: err });
    }
}); 
module.exports = router;