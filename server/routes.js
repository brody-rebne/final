'use strict';

// **** 3rd Party Modules ****

const fetchCharactersFromSWAPI = require('./addChar');

// In the routes file, app.get('/') calls this function

function homePageHandler(req, res) {
  // Get page one of the API from star wars
  // THEN, render an EJS Template with that data
  fetchCharactersFromSWAPI(1)
    .then(data => {
      console.log(data)
      return res.render('index', data)})
    .catch(error => { throw error; });
}

module.exports = { homePageHandler };
