const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('TaskSchema', TaskSchema);