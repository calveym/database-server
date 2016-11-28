var jsonfile = require('jsonfile');
var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();
var object = {fire: "man"};
var model = require('../models/dataManager');



router.get('/get', function(req, res) {
  var obj;

  var key = Object.keys(req.query).toString();
  res.send(obj[req.query[key]]);
});

router.post('/set', function(req, res) {
  fs.readFile("./data.json", function (obj) {
    console.log(obj);
    console.log("runs");
    var key = Object.keys(req.query).toString();
    obj[key] = req.query[key];
    res.redirect('/get?key=' + Object.keys(obj)[Object.keys(obj).length - 1]);
    model.exportObject(obj);
  });
});

module.exports = router;
