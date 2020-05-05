const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

/* Routes */
const eventsRoute = require('./routes/eventsRoute');

/* Express initialization */
const app = express();

// Prevent morgan logger execute on testing
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use(bodyParser.json());

/* Instatiate routes */
app.use('/events', eventsRoute);

module.exports = app;
