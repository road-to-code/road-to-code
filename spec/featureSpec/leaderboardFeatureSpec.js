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

  it('leaderboard closes when close button clicked', function(){
    var browser = this.browser;
    this.browser.pressButton('Show leaderboard');
    browser.pressButton('Close');
    this.browser.wait().then( function() {
     browser.assert.style("#leaderboard-modal", "display", "none");
    });
  });

  it('leaderboard should show player names and scores', function(){
    var browser = this.browser;
    this.browser.pressButton('Show leaderboard');
    this.browser.wait().then( function() {
      browser.assert.text("#high-scores-text", "High Scores");
      browser.assert.element("#leaderboard-list");
    });
  });

  it('should display the leaderboard after submitting score', function(){
    var browser = this.browser;
    this.browser.fill('#typed-text', "moveRight(9);");
    this.browser.pressButton('Add Instruction');
    this.browser.fill('#typed-text', "moveDown(9);");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
     this.browser.wait().then( function() {
       var broswer = this.browser;
       browser.wait().then( function(){
         browser.fill('#enter-name', "suse");
         browser.pressButton('Submit');
         browser.wait().then( function() {
           var broswer = this.browser;
           browser.assert.element("#show-leaderboard-button");
           browser.pressButton('Leaderboard');
           browser.assert.style("#leaderboard-modal", "display", "block");
         });
       });
     });
  });

});
