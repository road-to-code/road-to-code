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
  //
  // it('should flip when turns left', function(){
  //   this.browser.fill('#typed-text', "moveRight(2)");
  //   this.browser.fill('#typed-text', "moveLeft(2)");
  //   this.browser.pressButton('Add Instruction');
  //   this.browser.pressButton('Run');
  //   this.browser.assert('#character', 'flipped');
  // });
  //
  // it('should flip back when turns right', function(){
  //   this.browser.fill('#typed-text', "moveRight(2)");
  //   this.browser.pressButton('Add Instruction');
  //   this.browser.fill('#typed-text', "moveLeft(2)");
  //   this.browser.pressButton('Add Instruction');
  //   this.browser.fill('#typed-text', "moveRight(2)");
  //   this.browser.pressButton('Add Instruction');
  //   this.browser.pressButton('Run');
  //   this.browser.assert.('#character', 'flipped');//not to have flpped
  });

});
