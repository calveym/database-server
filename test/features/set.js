process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var assert = require('assert');
var Browser = require('zombie');

describe('get animal', function() {
  before(function() {
    this.server = http.createServer(app).listen(4000);
    this.browser = new Browser({ site: 'http://localhost:4000' });
  });

  before(function(done) {
    this.browser.visit('/set?lang=js', done);
  });

  it('should return js', function () {
    this.browser.assert.success();
    assert(this.browser.document.documentElement.innerHTML.match("js"));
  });
});
