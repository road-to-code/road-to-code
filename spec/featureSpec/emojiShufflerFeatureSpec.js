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
  this.browser.assert.element('#enter-shuffle');
  this.browser.assert.element('#submit-shuffle');
 });

 it('should change the background colour when submit clicked', function(){
   var browser = this.browser;
   this.browser.fill('#enter-colour', "shuffle(emojis)");
   this.browser.pressButton('Shuffle');

 });
 }
