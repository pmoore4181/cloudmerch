var Seller = require("../database/models/seller");
var Products = require("../database/models/product");
var Store = require("../database/models/store");
var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.send("yahoo");
})

//FIND ALL SELLERS, STORES, and PRODUCTS -working
router.get("/seller", function(req, res) {

    console.log("sellers accessed");

    Seller.find({}, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            res.json(doc)
        }
    })
});

//FIND A SPECIFIC SELLER -working
router.get("/seller/:sellername", function(req, res) {

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

//FIND A SPECIFIC STORE FROM SPECIFIC SELLER - does not work yet
router.get("/seller/:sellername/:storename", function(req, res) {

    var sellername = req.params.sellername;
    var storename = req.params.storename;

    console.log(`${sellername}'s store, ${storename}, accessed`);

    // Seller.findOne({ 'name': sellername }, { 'store.name': storename }),
    //     function(err, doc) {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             res.json(doc)
    //         }
    //     }

    // Seller.aggregate( {$match: { 'store.name': storename }, { $unwind : {"$store"} })
    //     .exec(function(err, doc) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.json(doc)
    //     }
    // });
});

//POST ROUTES
router.post("/seller", function(req, res) {

});

//PUT ROUTES
router.put("/seller", function(req, res) {

});

//DELETE ROUTES
router.delete("/seller", function(req, res) {

});



//FIND ONLY STORES FROM ALL SELLERS
// router.get("/seller/store", function(req, res) {

//     console.log("stores accessed");

//     Seller
//         .find({})
//         .populate({'$store'})
//         .exec(function(err, doc) {
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.json(doc)
//             }
//         })

// Seller.aggregate(
//     {
//     $match: {'store'}
//     }, 
//     // {
//     //     $unwind: '$store'
//     // }
//     ).exec(function(err, doc) {
//     if (err) {
//         console.log(err)
//     } else {
//         res.json(doc)
//     }
// })


module.exports = router;