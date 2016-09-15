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

  it('should have a button to display the leaderboard', function(){
    this.browser.assert.element("#leaderboard-button");
  });

  it('should not display unless show leaderboard clicked', function(){
    var browser = this.browser;
    this.browser.assert.style("#leaderboard-modal", "display", "");
  });

  it('leaderboard displays when show leaderboard button clicked', function(){
    var browser = this.browser;
    this.browser.pressButton('Show leaderboard');
    this.browser.wait().then( function() {
     browser.assert.style("#leaderboard-modal", "display", "block");
    });

  });

});
