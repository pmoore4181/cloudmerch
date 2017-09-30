const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test', {
    useMongoClient: true,
  });

  db
    .on('error', (error) => {
      console.warn('Warning', error);
    })
    .once('open', () => {
      console.log('Connected to users_test database!');
      done();
    });
});
