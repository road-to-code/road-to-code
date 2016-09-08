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

  xit('should move the character 2 tiles to the right', function(){
    this.browser.fill('#typed-text', "moveRight(2)");
    this.browser.pressButton('Add Instruction');
    this.browser.pressButton('Run');
    this.browser.assert.style('#character', 'left', "100px");
  });

});
