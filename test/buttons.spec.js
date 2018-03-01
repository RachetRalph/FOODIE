var expect = require("chai").expect;
var buttons = require("../public/js/buttons");


var data = [{},{},{},{},{}]
// what is the first string?
describe("Buttons", function() {
  it("should create a row for each recipe", function() {
    expect(buttons.initializeRows(data)).to.have.lengthOf(5);
  });


});