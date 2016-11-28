var jsonfile = require('jsonfile');
var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();
var model = require('../models/dataManager');
var path = require('path');
var dataPath = path.join(__dirname, '../models/data.json');


router.get('/get', function(req, res) {
  jsonfile.readFile(dataPath, function (err, obj) {
    if (err) console.log(err);
    var key = Object.keys(req.query).toString();
    res.send(obj[req.query[key]]);
  });
});

router.post('/set', function(req, res) {
  jsonfile.readFile(dataPath, function (err, obj) {
    console.log("Running");
    var key = Object.keys(req.query).toString();
    obj[key] = req.query[key];
    jsonfile.writeFile(dataPath, obj, function (err) {
      if (err) console.log(err);
    });
    res.redirect('/get?key=' + Object.keys(obj)[Object.keys(obj).length - 1]);
  });
});

module.exports = router;
