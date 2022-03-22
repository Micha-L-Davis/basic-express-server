'use strict';

const express = require(express);
const app = express();

// app.get person route

module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
};
