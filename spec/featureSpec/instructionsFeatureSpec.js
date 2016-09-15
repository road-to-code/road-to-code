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
    this.browser.fill('#typed-text', "moveRight(5);");
    this.browser.pressButton('Add Instruction');
    this.browser.assert.text("#entered-text", "moveRight(5);");
  });
  describe('instructions box', function() {

    beforeEach(function() {
      this.browser = new Browser({ site: 'http://localhost:8080' });
    });

    beforeEach(function(done) {
      this.browser.visit('/', done);
    });

    it('should not add an empty instruction', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });

    it('should not add an instruction that does not begin with move', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "mov");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });

    it('should not add an instruction that does not begin the direction with a cap letter', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveright");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });

    it('should not add an instruction that does not contain a number between the brackets', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight(h)");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });

    it('should not add an instruction that does not contain an opening bracket', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight5)");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });

    it('should not add an instruction that does not contain a closing bracket', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight(5");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });

    it('should not add an instruction that does not end with a semicolon', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRight(5)");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });


    it('should not add an instruction that does not contain a valid direction', function(){
      var browser = this.browser;
      this.browser.fill('#typed-text', "moveRelative(5)");
      this.browser.pressButton('Add Instruction');
      this.browser.wait().then( function() {
        browser.assert.style('div.alert', 'display', 'block');
      });
    });
  });

  it('should not add an empty instruction to shuffle(emojis)', function(){
    var browser = this.browser;
    this.browser.fill('#enter-shuffle', "");
    this.browser.pressButton('Shuffle');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', 'block');
    });
  });

  it('should not add an empty colour instruction to changeBackgroundColour', function(){
    var browser = this.browser;
    this.browser.fill('#enter-colour', "");
    this.browser.pressButton('Submit');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', 'block');
    });
  });

  it('should not add a colour instruction that does not begin with changeBackgroundColour', function(){
    var browser = this.browser;
    this.browser.fill('#enter-colour', "changeBackgroundBlue");
    this.browser.pressButton('Submit');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', 'block');
    });
  });

  it('should not add a colour instruction that does not contain a bracket', function(){
    var browser = this.browser;
    this.browser.fill('#enter-colour', "changeBackgroundColourblue);");
    this.browser.pressButton('Submit');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', 'block');
    });
  });

  it('should not add a colour instruction that does not contain a close bracket', function(){
    var browser = this.browser;
    this.browser.fill('#enter-colour', "changeBackgroundColour(blue");
    this.browser.pressButton('Submit');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', 'block');
    });
  });

  it('should not add a colour instruction that does not end with a semicolon', function(){
    var browser = this.browser;
    this.browser.fill('#enter-colour', "changeBackgroundColour(blue)");
    this.browser.pressButton('Submit');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', 'block');
    });
  });

  it('should add a colour instruction that is formatted properly', function(){
    var browser = this.browser;
    this.browser.fill('#enter-colour', "changeBackgroundColour(blue);");
    this.browser.pressButton('Submit');
    this.browser.wait().then( function() {
      browser.assert.style('div.alert', 'display', '');
      browser.assert.style('#a96', 'background-color', 'blue');
    });
  });

});
