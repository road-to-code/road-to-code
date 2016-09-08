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

  it('should load text input box', function(){
    this.browser.assert.element('#typed-text');
  });

  it('should load display instructions box', function(){
    this.browser.assert.element('#entered-text');
  });

  xit('should display typed instructions', function(){
    this.browser.fill('#typed-text', "moveRight");

    Browser.prototype.enterPress = function(targetSelector, keyCode) {
     var event = this.window.document.createEvent('HTMLEvents');
     event.initEvent('keyup', true, true);
     event.which = keyCode;
     var target = this.window.document.querySelector(targetSelector);
     target && target.dispatchEvent(event);
    };

    this.browser.enterPress('#typed-text', 13);
    waits(300);
    console.log();
    this.browser.assert.text("#entered-text", "moveRight");
  });

});
