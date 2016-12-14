// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

const PaginationHelper = require('../PaginationHelper')
const assert = require('chai').assert
const expect = require('chai').expect

describe("Solution", function(){
  it('should return page count of 2', function() {
    expect(helper.pageCount()).to.eql(2)
  })
  it("should equal itemcount of 6", function(){
    expect(helper.itemCount()).to.eql(6)
  });
  it('should return pageItemcount of 4 for first page', function() {
    expect(helper.pageItemCount(0)).to.eql(4)
  })
  it('should return pageItemcount of 2 for second page', function() {
    expect(helper.pageItemCount(1)).to.eql(2)
  })
  it('should return pageItemcount of -1 for third page', function() {
    expect(helper.pageItemCount(2)).to.eql(-1)
  })
  it('should return pageIndex of 1 for fifth item in 4 items per page', function() {
    expect(helper.pageIndex(5)).to.eql(1)
  })
  it('should return pageIndex of 0 for second item in 4 items per page', function() {
    expect(helper.pageIndex(2)).to.eql(0)
  })
   it('should return pageIndex of -1 for out of range item', function() {
    expect(helper.pageIndex(20)).to.eql(-1)
  })
  it('should return pageIndex of -1 for out of range item', function() {
    expect(helper.pageIndex(-10)).to.eql(-1)
  })
});

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1