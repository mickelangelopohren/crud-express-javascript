const express = require('express');

/* Routes */
const eventRoute = require('./routes/eventRoute');

/* Express initialization */
const app = express();

/* Instatiate routes */
app.use('/event', eventRoute);

module.exports = app;
