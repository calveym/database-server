var jsonfile = require('jsonfile');
var express = require('express');
var router = express.Router();
var dataManager = require('../models/dataManager');



router.get('/get', function(req, res) {
  jsonfile.readFile(dataPath, function (err, obj) {
    if (err) console.log(err);
    res.send(obj[req.query["key"]]);
  });
});

router.post('/set', function(req, res) {
  jsonfile.readFile(dataPath, function (err, obj) {
    var key = Object.keys(req.query).toString();
    obj[key] = req.query[key];
    jsonfile.writeFile(dataPath, obj, function (err) {
      if (err) console.log(err);
    });
    res.status(200);
    res.send();
  });
});

module.exports = router;
