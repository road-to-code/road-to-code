var Browser = require('zombie');
var assert = require('assert');
var chai = require('chai');
var expect  = chai.expect;
var assert = chai.assert;

Browser.localhost('example.com', 3000);

describe('The map page', function(){

  var browser = new Browser();

  before(function(done){
    browser.visit('/', done);
  });

  it('renders a map', function(){
    assert.ok(this.browser.success);
  })

})
