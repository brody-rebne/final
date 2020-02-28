'use strict';

function getNumberOfLikes(data) {

  let names = data.results.map(person => person.name);

  let SQL = 'SELECT * FROM click_counts WHERE remote_id = ANY($1)';

  return database.query(SQL, [names])

    .then(counts => {

      for (let i = 0; i < data.results.length; i++) {
        for (let x = 0; x < counts.rows.length; x++) {
          if (data.results[i].name === counts.rows[x].remote_id) {
            data.results[i].likes = counts.rows[x].clicks;
          }
        }
      }

      return data;
    })
}

module.exports = getNumberOfLikes;
