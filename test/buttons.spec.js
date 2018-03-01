// //var expect = require("chai").expect;

// import chai = require('chai');
// var expect = chai.expect;
// import jsdom = require('jsdom');
// var document = jsdom.jsdom("");
// // var buttons = require("../public/js/buttons");
// // var jsdom = require('jsdom');
// var window = document.defaultView;

// global.window = window;
// global.$ = require('jquery');

var expect = require('chai').expect;
var jsdom = require('jsdom');
var document = jsdom.jsdom();
var window = document.defaultView;

global.$ = require('jquery')(window);


var data = [{},{},{},{},{}]
// what is the first string?
describe("Buttons", function() {
  it("should create a row for each recipe", function() {
    expect(buttons.initializeRows(data)).to.have.lengthOf(5);
  });


});