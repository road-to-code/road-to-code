var Browser = require('zombie');
var assert = require('assert');
var chai = require('chai');
var expect  = chai.expect;
var assert = chai.assert;

describe('home page', function() {
  beforeEach(function() {
    this.browser = new Browser({ site: 'http://localhost:8080' });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should have a start square', function(){
    this.browser.assert.attribute("#a00.start-end-tile");
  })

  it('should have a finish square', function(){
    this.browser.assert.attribute("#a99.start-end-tile");
  });


});
