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

  it('should display a choose character box on page load', function(){
    this.browser.assert.element(".window");
  });

  it('should display a choose character box with four character images', function(){
    this.browser.assert.element("#suse-thumb");
    this.browser.assert.element("#mike-thumb");
    this.browser.assert.element("#luke-thumb");
    this.browser.assert.element("#dan-thumb");
  });

  it('should choose suse as a character', function(){
    this.browser.pressButton('#suse-thumb');
    this.browser.assert.attribute("#character.suse");
  });

});
