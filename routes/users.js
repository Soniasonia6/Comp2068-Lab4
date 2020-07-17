'use strict';
var express = require('express');
var router = express.Router();
var userModel = require('../models/user');


/* GET users listing. */
router.get('/', function (req, res) {
    userModel.find({}, function (err, usersFound) {
        console.log(err);
        console.log(usersFound);
        //Pass found articles from server to pug file

        res.render('users', { users: usersFound, user: req.user });
    });
});

module.exports = router;