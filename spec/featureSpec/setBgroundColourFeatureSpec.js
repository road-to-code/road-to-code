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

 it('should have input elements', function(){
  this.browser.assert.element('#enter-colour');
  this.browser.assert.element('#submit-colour');
 });

 it('should change the background colour when submit clicked', function(){
   var browser = this.browser;
   this.browser.fill('#enter-colour', "changeBackgroundColour(blue)");
   this.browser.pressButton('Submit');
   browser.assert.style('#a90', "background-color", 'blue');
 });

 });
