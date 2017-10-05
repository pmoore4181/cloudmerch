// Dependencies ================================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require('mongoose');
var path = require('path');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3001;

// Run Morgan and BodyParser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require schemas
var Product = require('./database/models/product');
var Seller = require('./database/models/seller');
var Store = require('./database/models/store');

app.use(express.static("./shopping-cart-app/src"));

// MONGODB STUFF ===============================================

const db = mongoose.connection;
mongoose.Promise = global.Promise;

// before((done) => {
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
// });

// Require the routes and have them pass through the app

// var router = express.Router();

// app.use(router);

// Require our routes file pass our router object
// require("./controllers/routes")(router);

var routes = require("./controllers/routes");

app.use(routes);



// app.use()

// ROUTE TO INDEX ==============================================
// app.use('/', user);
// app.use('/users', users);



// LISTEN TO process.env.PORT or 3001 ==========================
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})
