const express = require('express');
const morgan = require('morgan');

const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use(require('./routes/contacts.routes.js'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/login.routes'));


module.exports = app;