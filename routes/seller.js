var express = require('express');
var app = express();
var sellerRouter = express.Router();

var Seller = require('../database/models/seller');

// route to get all users
sellerRouter.get('/sellers', function(req, res) {
    Seller.findOne(function(err, doc) {

            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });


module.exports = sellerRouter;