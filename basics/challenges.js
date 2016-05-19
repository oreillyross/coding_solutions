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



// Flatten an array
function steamrollArray(arr) {
  
  
  function flatten(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
}

  return flatten(arr); 
  
}

console.log(
steamrollArray([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []])
  );

//[[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]
// [1, [2], [3, [[4]]]]

// Heap algorithnm using recursion 
// How to find all permutations from an input array.

function heap(items){
    return part([],items);

    function part(done,rest){
        return rest.length?
            part(done,tail(rest))
                .concat(part(done.concat(rest[0]),tail(rest)))
            :[done]}
    function tail(a){return a.slice(1)}
}

