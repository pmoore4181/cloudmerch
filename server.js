// Dependencies ================================================
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const routes = require('./controllers/routes');
// const path = require('path');

// Create Instance of Express
const app = express();
const PORT = process.env.PORT || 3001;

// Run Morgan and BodyParser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// require schemas
// const Product = require('./database/models/product');
// const Seller = require('./database/models/seller');
// const Store = require('./database/models/store');

app.use(express.static('./shopping-cart-app/src'));

// MONGODB STUFF ===============================================

const db = mongoose.connection;
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://shoppingCart:shoppingCartPW1@ds155674.mlab.com:55674/shoppingcart', {
  useMongoClient: true,
});

db
  .on('error', (error) => {
    console.warn('Warning', error);
  })
  .once('open', () => {
    console.log('Connected to mLab database');
    // done();
  });

// PASSPORT ====================================================
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleSecret,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile) => {
  console.log('access token', accessToken);
  console.log('refresh token', refreshToken);
  console.log('profile', profile);
}));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));


// setting google Oauth
app.get('/auth/google/callback', passport.authenticate('google'));

// Require the routes and have them pass through the app

// var router = express.Router();

// app.use(router);

// Require our routes file pass our router object
// require("./controllers/routes")(router);

app.use(routes);

// app.use()

// ROUTE TO INDEX ==============================================
// app.use('/', user);
// app.use('/users', users);

// LISTEN TO process.env.PORT or 3001 ==========================
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
