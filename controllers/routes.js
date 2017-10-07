var Seller = require("../database/models/seller");
var Products = require("../database/models/product");
var Store = require("../database/models/store");
var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.send("yahoo");
})

// FIND ALL SELLERS, STORES, and PRODUCTS -working
router.get("/sellers", function(req, res) {

    console.log("Sellers accessed");

    Seller.find({}, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            res.json(doc)
        }
    })
});

// FIND A SPECIFIC SELLER -working
router.get("/sellers/:sellername", function(req, res) {

    var sellername = req.params.sellername;

    console.log(`${sellername} accessed`);

    Seller.findOne({ 'name': sellername }, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            res.json(doc)
        }
    })
});

// FIND A SPECIFIC STORE FROM SPECIFIC SELLER - working
router.get("/sellers/:sellername/:storeid", function(req, res) {

    var sellername = req.params.sellername;
    var storeid = req.params.storeid;

    console.log(`${sellername}'s store, ${storeid}, accessed`);

    Seller.find({ 'name': sellername })
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            }
            if (doc[0].store[0]._id == storeid) {
                res.json(doc[0].store[0]);
            }
            if (doc[0].store[1]._id == storeid) {
                res.json(doc[0].store[1]);
            }
        })
});

//
// POST ROUTES
//

//  ADD NEW SELLER -working
router.post("/sellers", function(req, res) {
    var newSeller = new Seller(req.body);

    newSeller.save(function(error, doc) {
        if (error) {
            console.log(error)
        } else {
            console.log("Seller posted to db")
        }
    })
});

// ADD NEW STORE TO A CERTAIN SELLER- working
router.post("/sellers/:sellername/stores", function(req, res) {

    var body = req.body;

    Seller.findOneAndUpdate({ "name": req.params.sellername }, { $push: { store: body}},{ new: true },
        function(err, numAffected) {
            if (err) {
                console.log(err)
            } else {
                console.log("Store added to seller")
            }
        });
});

//ADD NEW PRODUCTS TO STORE
router.post("/sellers/:sellername/:storename/products", function(req, res) {

    var body = req.body;

    


});



// PUT ROUTES
router.put("/sellers", function(req, res) {

});

// DELETE ROUTES
router.delete("/sellers", function(req, res) {

});





module.exports = router;