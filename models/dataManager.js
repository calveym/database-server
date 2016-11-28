var path = require('path');
var dataPath = path.join(__dirname, '../models/data.json');
var jsonfile = require('jsonfile');

function DataManager() {
  this.object = undefined;
}

DataManager.prototype = {
  readFile: function (callback) {
    var err;
    jsonfile.readFile(dataPath, function (err, obj) {
      this.object = obj;
      callback(this.object);
    });
  },

  writeFile: function (obj) {
    jsonfile.writeFile(dataPath, obj, function (err) {
    });
  },

  returnObject: function () {
    return object;
  },

  sendObject: function (obj) {
    object = obj;
    writeFile(obj);
  },

  processFile: function (obj) {
    key = Object.keys(req.query).toString();
    obj[key] = req.query[key];
    dm.sendObject(obj);
  },


};

module.exports = DataManager;
