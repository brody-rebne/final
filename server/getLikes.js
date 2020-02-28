'use strict';

const database = require('./database')

function getNumberOfLikes(data) {
  let names = data.results.map(person => person.name);
  let SQL = 'SELECT * FROM click_counts WHERE remote_id = ANY($1)';
  return database.query(SQL, [names])
    .then(counts => {
      data.results.forEach(result => {
        counts.rows.forEach(row => {
          if (result.name === row.remote_id) {
            result.likes = row.clicks;
          }
        });
      });
      return data;
    });
}

module.exports = getNumberOfLikes;
