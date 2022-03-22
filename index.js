'use strict';

const { append } = require('express/lib/response');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
