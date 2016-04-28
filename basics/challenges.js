/* The purpose of this file is to code all the common programming challenges that
migh be required for coding interviews. The key is to try use as much
as possible functional programming techniques. */


const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1))
  }
};

console.log(factorial(0));
console.log(factorial(4));

// Scope question taken from http://www.sitepoint.com/5-typical-javascript-interview-exercises/
// in this IIFE the b is actually global and a is local to function
 

(function() {
  
  var a = b = 5;
  console.log(b); // prints 5
})();

// in strict mode it fails and you have to be explicit in your intent
// "ReferenceError: b is not defined, ===>  adding window.b works

'use strict'
(function() {
  
  var a = window.b = 5;
  console.log(b); // prints 5
})();