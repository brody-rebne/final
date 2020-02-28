'use strict';

const superagent = require('superagent');
const database = require('./database.js');

function addChar(request, response) {
  console.log(request.body);
}

module.exports = addChar;
