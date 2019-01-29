var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var TodoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    responsible: { type: String, required: true },
    priority: { type: String, required: true }
});

module.exports = Mongoose.model('todo', TodoSchema);