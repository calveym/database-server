var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();
var model = require('../models/dataManager');
var path = require('path');
var dataPath = path.join(__dirname, '../models/data.json');


/* GET home page. */
router.get('/get', function(req, res) {
  jsonfile.readFile(dataPath, function (err, obj) {
    var key = Object.keys(req.query).toString();
    res.send(obj[req.query[key]]);
  });
});

router.post('/set', function(req, res) {
  jsonfile.readFile(dataPath, function (err, obj) {
    var key = Object.keys(req.query).toString();
    obj[key] = req.query[key];
    jsonfile.writeFile(dataPath, obj, function (err) {
      console.log(err);
    });
    console.log(obj);
    res.redirect('/get?key=' + Object.keys(obj)[Object.keys(obj).length - 1]);
  });
});

module.exports = router;
