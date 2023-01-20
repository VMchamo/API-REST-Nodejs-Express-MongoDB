const { request } = require('express');
const express = require('express');
const roles = require('../models/Roles');
const router = express.Router();
const Roles = require('../models/Roles');

router.get('/', (req, res) => {
    res.send('Estamos en Roles')
});


router.post('/', async (req, res) => {
    const roles = new Roles({
        name: req.body.name,
        description: req.body.description
    });
    try {
        const savedRoles = await roles.save();
        res.json(savedRoles);
    } catch (err) {
        res.json( { message: err} )
    }
});

router.get('/:rolesId', async (req, res) => {
    try {
        const roles = Roles.findById(req.params.rolesId);
        res.json(roles);
    } catch (err) { 
        res.json( { message: err });
    }
});

// Delete Rol
router.delete('/:rolesId', async (req, res) => {
    try {
    const removeRoles = await roles.remove( {_id: req.params.rolesId});
    res.json(removedRoles);
    }catch (err){
        res.json( { message: err });
    }
});

// Update Rol
router.patch('/:rolesId', async (req, res) => {
    try {
    const updateRoles = await roles.updateOne( {_id: req.params.rolesId}, {$set: {name: req.body.name} }
    );
    res.json(updateRoles);
    } catch (err) {
        res.json( { message: err });
    }
}); 
module.exports = router;