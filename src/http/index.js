const express = require('express');

/* Routes */
const eventsRoute = require('./routes/eventsRoute');

/* Express initialization */
const app = express();

/* Instatiate routes */
app.use('/events', eventsRoute);

module.exports = app;
