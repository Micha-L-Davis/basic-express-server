'use strict';

const logRoute = require('./middleware/logger.js');
const validate = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const express = require('express');
const app = express();



function handleName(request, response, next) {
  response.send({ name: request.query.name });
}

app.use(logRoute);

app.get('/person', validate, handleName);

app.use(error404);

app.use(error500);

module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
};
