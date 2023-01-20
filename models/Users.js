const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    address: String
});


module.exports = mongoose.model('Users', UsersSchema);