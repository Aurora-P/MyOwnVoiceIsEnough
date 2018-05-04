'use strict';

const Datastore = require('@google-cloud/datastore');
const datastore = Datastore({
  projectId: 'myownvoiceisenough'
});
exports.postMovie = (req, res) => {
  const kind = 'movies';
  const name = Date.now();
  const movieKey = datastore.key([kind, name]);
  const movieData = req.body;
  const entity = {
    key: movieKey,
    data: movieData
  };

  datastore.insert(entity).then(() => {
    res.header("Access-Control-Allow-Origin","*");
    res.status(200).send('inserted' + movieData);
    return;
  })
  .catch(err => {
    console.error('ERROR:', err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Cache-Control","no-cache");
    res.status(200).send('Error: ' + req.body.message);
  });
};
