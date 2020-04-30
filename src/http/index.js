const express = require('express');
const cors = require('cors');
// const { NotFoundError } = require('../errors');

/* Routes */
const basicsRoute = require('./routes/routes');

/* Express initialization */
const app = express();

/* Express utilites */
app.use(cors());

/* Status endpoint */
app.get(['/info', '/status'], async (req, res, next) => {
  try {
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/* Instatiate routes */
app.use('/', basicsRoute);

// app.all('*', (req, res, next) => {
//   next(new NotFoundError());
// });

module.exports = app;
