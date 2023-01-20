const mongoose = require('mongoose');

const RolesSchema = mongoose.Schema({
    name : String,
    description : String
})

module.exports = mongoose.model('Roles', RolesSchema);