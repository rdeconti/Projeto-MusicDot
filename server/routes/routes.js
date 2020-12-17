const dataRoutes = (app, fs) => {
  // variables
  const dataPath = './public/data/music.json';

  // READ
  app.get('/music', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = dataRoutes;
