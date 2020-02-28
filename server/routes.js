'use strict';

// **** 3rd Party Modules ****

// **** Custom Modules ****

// Our database client. We'll use this to run queries
const database = require('./database.js');

const fetchCharactersFromSWAPI = require('./getChar');

// In the routes file, app.get('/') calls this function

function homePageHandler(req, res) {
  // Get page one of the API from star wars
  // THEN, render an EJS Template with that data
  fetchCharactersFromSWAPI(1)
    .then(data => res.render('index', data))
    .catch(error => { throw error; });
}

// For each individual in the list of results, see if they
// had a database entry and get the number of likes.
// Add a .likes property to the character with that number if found


module.exports = { homePageHandler };
