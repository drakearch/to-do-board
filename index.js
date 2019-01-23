const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // new version of bodyParser.json()

// Routes
app.use('/api', require('./src/routes'));

// Static files
//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});