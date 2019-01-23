var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = Mongoose.model('task', TaskSchema);