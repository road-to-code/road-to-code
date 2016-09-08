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

  it('should show an add instructions button', function(){
    this.browser.assert.element('#addInstructions');
  });

  it('should display typed instructions', function(){
    this.browser.fill('#typed-text', "moveRight");
    this.browser.pressButton('Add Instruction');
    this.browser.assert.text("#entered-text", "moveRight");
  });

});
