process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var assert = require('assert');
var Browser = require('zombie');

describe('get', function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/get?key=animal', done);
  });

  it('should return Lion', function () {
    this.browser.assert.success();
    assert(this.browser.document.documentElement.innerHTML.match("Lion"));
  });
});
