var express = require('express');
var router = express.Router();
var object = {fire: "man"};

/* GET home page. */
router.get('/get', function(req, res) {
  var key = Object.keys(req.query).toString();
  res.send(object[req.query[key]]);
});

router.post('/set', function(req, res) {
  var key = Object.keys(req.query).toString();
  object[key] = req.query[key];
  console.log(object);
  res.redirect('/get?key=' + Object.keys(object)[Object.keys(object).length - 1]);
});

module.exports = router;
