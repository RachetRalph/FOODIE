var expect = require("chai").expect;
var buttons = require("../public/js/buttons");
var jsdom = require('jsdom');



var data = [{},{},{},{},{}]
// what is the first string?
describe("Buttons", function() {
var doc = jsdom.jsdom(html),
window = doc.parentWindow,
$ = global.jQuery = require('jquery')(window);

  it("should create a row for each recipe", function() {
    expect(buttons.initializeRows(data)).to.have.lengthOf(5);
  });


});