const express = require('express');
const bodyParser = require('body-parser');

/* Routes */
const eventsRoute = require('./routes/eventsRoute');

/* Express initialization */
const app = express();
app.use(bodyParser.json());

/* Instatiate routes */
app.use('/events', eventsRoute);

module.exports = app;
