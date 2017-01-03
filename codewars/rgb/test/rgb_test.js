 var expect = require("chai").expect;
 var assert = require("chai").assert;
 var should = require("chai").should();
 
 var rgb = require("../rgb")
 
describe("Solution", function(){
  it("should 255,255,255 = FFFFFF", function(){
    expect(rgb(255,255,255)).to.eql("FFFFFF")
  });
  it("should 255,255,300 = FFFFFF", function(){
    expect(rgb(255,255,300)).to.eql("FFFFFF")
  });
  it("should 0,0,0 = 000000", function(){
    expect(rgb(0,0,0)).to.eql("000000")
  });
});

/*

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/