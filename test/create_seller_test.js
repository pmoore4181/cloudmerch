const mongoose = require('mongoose');
const assert = require('assert');
const Seller = require('../database/models/seller');

mongoose.Promise = global.Promise;

describe('Creating records', () => {
  it('Saves a seller', () => {
    const joe = new Seller({ name: 'Joe' });

    joe.save()
      .then(() => {
        assert(!joe.isNew);
      });
  });
});
