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
  });

  it('should have a finish square', function(){
    this.browser.assert.attribute("#a99.start-end-tile");
  });

  describe('timer', function(){
    it('should have a count-down timer div', function(){
      this.browser.assert.element("#timer");
    });

    it('should not display before run button hit', function(){
      this.browser.assert.style("#timer", 'display', "");
    });

    it('should hide the timer when game has finished', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight(5);");
      this.browser.pressButton('Add Instruction');
      this.browser.fill('#typed-text', "moveDown(5);");
      this.browser.pressButton('Add Instruction');
      this.browser.fill('#typed-text', "moveLeft(4);");
      this.browser.pressButton('Add Instruction');
      this.browser.pressButton('Run');
      this.browser.wait().then( function() {
        browser.assert.style("#timer", 'display', "");
      });
    });
  });

  // describe('character exits the map', function () {
  //
  //   it('game ends when character leaves left side of map', function() {
  //     var browser = this.browser;
  //     this.browser.fill('#typed-text', "moveLeft(1);");
  //     this.browser.pressButton('Add Instruction');
  //     this.browser.pressButton('Run');
  //     this.browser.wait().then( function() {
  //       browser.assert.style('#modal-loss', 'display', "block");
  //     });
  //   });
  //
  //   it('should end the game when it steps on the devil', function(){
  //     var browser = this.browser;
  //     this.browser.fill('#typed-text', "moveRight(7)");
  //     this.browser.pressButton('Add Instruction');
  //     this.browser.fill('#typed-text', "moveDown(2)");
  //     this.browser.pressButton('Add Instruction');
  //     this.browser.pressButton('Run');
  //     this.browser.wait().then( function() {
  //       browser.assert.style('#modal-loss', 'display', "block");
  //     });
  //   });
  //
  // });


});
