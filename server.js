// Dependencies ================================================
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./controllers/routes');
const keys = require('./config/keys');
require('./database/models/seller');
require('./services/passport');
// Create Instance of Express
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('shopping-cart-app/build'));
}

// Run Morgan and BodyParser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('./shopping-cart-app/src'));

// COOKIE SESSION
app.use(cookieSession({
  // cookie will last for 30 days
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

// PASSPORT ===================================================
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/authRoutes')(app);

// MONGODB STUFF ===============================================
const db = mongoose.connection;
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
  useMongoClient: true,
});

db
  .on('error', (error) => {
    console.warn('Warning', error);
  })
  .once('open', () => {
    console.log('Successfully connected to database!');
    // done();
  });

// Require the routes and have them pass through the app

// var router = express.Router();

// app.use(router);

// Require our routes file pass our router object
// require("./controllers/routes")(router);

app.use(routes);

// LISTEN TO process.env.PORT or 3001 ==========================
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
