var jsonfile = require('jsonfile');
var express = require('express');
var router = express.Router();
var DataManager = require('../models/dataManager');
var dm = new DataManager();
var object = require('../bin/www');

router.get('/get', function(req, res) {
  dm.returnObject(function (obj) {
    sendFileResponse(obj, req, res);
  });
});

router.post('/set', function(req, res) {
  var obj = dm.returnObject();
  dm.processFile(obj);
  dm.sendOk(res);
});

function sendOk (res) {
  res.status(200);
  res.send();
}

function sendFileResponse (obj, req, res) {
  res.send(obj[req.query.key]);
}

module.exports = router;
