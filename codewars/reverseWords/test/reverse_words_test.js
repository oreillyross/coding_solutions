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
 var expect = require("chai").expect;
 var assert = require("chai").assert;
 var should = require("chai").should();
 
 var reverseWords = require("../reverse_words")

describe("Solution", function(){
  it("should reverse words", function(){
    assert.equal(reverseWords("This should reverse"), "sihT dluohs esrever");
  });
});