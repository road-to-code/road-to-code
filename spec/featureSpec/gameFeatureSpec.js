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

  it('should have a run button', function(){
    this.browser.assert.element('#runInstructions');
  });

  it('should remove emojis on collision', function(){
    var browser = this.browser;
    this.browser.fill('#typed-text', "moveRight(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
      this.browser.wait().then( function() {
        browser.assert.text("#a01", "");
        browser.assert.text("#a02", "");
      });
  });

  it('should increase the score as more emojis are picked up', function(){
    var browser = this.browser;
    this.browser.fill('#typed-text', "moveRight(5)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.wait().then( function() {
      browser.assert.text('#points-score', '240');
    });
  });

  it('should turn the path behind a darker green', function(){
    this.browser.fill('#typed-text', "moveRight(4)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.assert.attribute('#a04', 'dirt');
  });
});
