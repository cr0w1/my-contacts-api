const express = require('express');
const morgan = require('morgan');

const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use(require('./routes/contacts.routes.js'));


module.exports = app;