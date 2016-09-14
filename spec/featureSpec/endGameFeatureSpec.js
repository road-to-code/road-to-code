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

    it('should show 10 secs after run button hit', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight(2)");
      this.browser.pressButton('Add Instruction');
      this.browser.pressButton('Run');
      this.browser.attribute('#timer'.start);
    });

    xit('should stop after 10 seconds', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight(2)");
      this.browser.pressButton('Add Instruction');
      this.browser.pressButton('Run');
      this.browser.attribute('#timer'.end);
    });
  });

});
