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

  it('should have a character on the map', function(){
      this.browser.assert.attribute("#character");
  });

  it('should move on click', function (){
    this.browser.fire('#container', 'click');
    this.browser.assert.style('#character', 'left', "10px");
  });
});
