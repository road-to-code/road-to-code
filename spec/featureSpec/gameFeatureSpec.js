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

  it('should move the character 2 spaces to the right', function(){
    this.browser.fill('#typed-text', "moveRight(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.assert.style('#character', 'left', "100px");
  });

  it('should move the character 2 spaces down', function(){
    this.browser.fill('#typed-text', "moveDown(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.assert.style('#character', 'top', "100px");
  });

  it('should respond to multiple instructions', function(){
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

  // it('should turn the path behind a darker green', function(){
  //   this.browser.fill('#typed-text', "moveRight(4)");
  //   this.browser.pressButton('Add Instruction');
  //   this.browser.pressButton('Run');
  //   this.browser.assert.text('#a04', 'dirt');
  // });

});
