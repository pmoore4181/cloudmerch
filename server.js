const mongoose = require('mongoose');

const db = mongoose.connection;

before((done) => {
  mongoose.connect('mongodb://localhost/shopping_cart', {
    useMongoClient: true,
  });

  db
    .on('error', (error) => {
      console.warn('Warning', error);
    })
    .once('open', () => {
      console.log('Connected to shopping_cart database!');
      done();
    });
});
