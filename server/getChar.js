'use strict';

const superagent = require('superagent');
const getNumberOfLikes = require('./getLikes');

function fetchCharactersFromSWAPI(pageNumber) {
  // Note that the function(s) that use this helper function
  // expect a promise  -- they use .then()
  // therefore, we simply return the call to superagent which will
  // resolve with any data found

  return superagent.get(`https://swapi.co/api/people/?page=${pageNumber}`)
    .then(response => {
      // After we get the data from the remote API, go to the
      // Database and add the number of "likes" for each character
      // from our database, if there are any
      return getNumberOfLikes(response.body)
    })
    .catch(error => { throw error; });
}

module.exports = fetchCharactersFromSWAPI;
