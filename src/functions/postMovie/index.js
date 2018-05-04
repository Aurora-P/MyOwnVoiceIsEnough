'use strict';

const Datastore = require('@google-cloud/datastore');
const datastore = Datastore({
  projectId: 'myownvoiceisenough',
});

exports.postMovie = (req, res) => {

  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const kind = 'movies';
  const name = Date.now();
  const movieKey = datastore.key([kind, name]);
  const movieData = JSON.stringify(req.body);
  const entity = {
    key: movieKey,
    data: movieData
  };

  datastore.insert(entity).then(() => {
    // Task inserted successfully.
    res.status(200).send('inserted');
    return;
  });
};
