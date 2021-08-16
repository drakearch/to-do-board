var config = require('../config');
var Mongoose = require('mongoose');

var dbURI = "mongodb+srv://" + encodeURIComponent(config.db.username) 
    + ":" + encodeURIComponent(config.db.password)
    + "@" + config.db.host
    // + ":" + config.db.port
    + "/" + config.db.name
    + "?retryWrites=true&w=majority";

Mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

Mongoose.connection.on('error', function(err) {
    if(err) throw err;
});

Mongoose.Promise = global.Promise;

module.exports = { Mongoose,
    models: {
        todo: require('./schemas/todo.js')
    }
};