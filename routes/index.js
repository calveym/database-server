var jsonfile = require('jsonfile');
var express = require('express');
var router = express.Router();
var fs = require('fs');


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
