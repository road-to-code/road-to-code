var Browser = require('zombie');
var assert = require('assert');
var chai = require('chai');
var expect  = chai.expect;
var assert = chai.assert;

describe('modal', function() {
 beforeEach(function() {
   this.browser = new Browser({ site: 'http://localhost:8080' });
 });

 beforeEach(function(done) {
   this.browser.visit('/', done);
 });

 it('should load', function(){
   assert.ok(this.browser.success);
 });

 it('should display modal-loss if game lost', function(){
   var browser = this.browser;
   this.browser.fill('#typed-text', "moveRight(2);");
   this.browser.pressButton('Add Instruction');
   this.browser.pressButton('Run');
     this.browser.wait().then( function() {
      browser.assert.style("#modal-loss", "display", "block");
      browser.assert.style("#modal-win", "display", "");
     });
 });

 it('should display modal-win if game win', function(){
   var browser = this.browser;
   this.browser.fill('#typed-text', "moveRight(9);");
   this.browser.pressButton('Add Instruction');
   this.browser.fill('#typed-text', "moveDown(9);");
   this.browser.pressButton('Add Instruction');
   this.browser.pressButton('Run');
    this.browser.wait().then( function() {
      var broswer = this.browser;
      browser.wait().then( function(){
        browser.assert.style("#modal-loss", "display", "");
        browser.assert.style("#modal-win", "display", "block");
      });
    });
 });

 it('should have a play again button', function(){
   var browser = this.browser;
   this.browser.fill('#typed-text', "moveRight(2)");
   this.browser.pressButton('Add Instruction');
   this.browser.pressButton('Run');
     this.browser.wait().then( function() {
       browser.assert.elements("#play-again", 4);
     });
 });

});
