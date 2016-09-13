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

  it('should display the user score', function(){
    this.browser.assert.text('#points-score', '0');
  });

  xit('should move the character 2 spaces to the right', function(){
    this.browser.fill('#typed-text', "moveRight(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.wait().then( function() {
      this.browser.assert.style('#character', 'left', "100px");
    });
  });

  xit('should move the character 2 spaces down', function(){
    this.browser.fill('#typed-text', "moveDown(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.assert.style('#character', 'top', "100px");
  });

  xit('should respond to multiple instructions', function(){
    this.browser.fill('#typed-text', "moveRight(4)");
    this.browser.pressButton('Add Instruction');
    this.browser.fill('#typed-text', "moveDown(4)");
    this.browser.pressButton('Add Instruction');
    this.browser.fill('#typed-text', "moveUp(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.fill('#typed-text', "moveLeft(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.assert.style('#character', 'left', "100px");
    this.browser.assert.style('#character', 'top', "100px");
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
  // the pending tests above are not functioning

});
