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

 it('should load', function(){
   assert.ok(this.browser.success);
 });

 it('loads the grid', function(){
   this.browser.assert.element('#container');
 });

 it('loads the grid with coloured tiles', function(){
   this.browser.assert.attribute('.diamond');
   this.browser.assert.attribute('.grass');
 });
 it('loads the 1s with an emoji', function(){
   this.browser.assert.text('#a11', "👑");
 });
});
