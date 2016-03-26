"use strict";

// Functional programming in Javascript - all functions created from first principles. 
// These might differ from the libraries which implement them more rigorously.

// reduce function which kind off acts like a fold

let reduce = function(arr, combine, start) {
    
    let current = 0;
    current = start;
    for (let i = 0; i < arr.length; i++) {
        current = combine(current, arr[i]);
    }
    return current;
};

console.log(reduce([1,2,3,8], function(a,b) {
    return a + b;
}, 0));





