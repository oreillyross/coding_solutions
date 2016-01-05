"use strict";

// 3 = Fizz, 5 = Buzz, 15 FizzBuzz

let fizz = function(num) {
    if (num % 3 === 0) return "Fizz";
};

let buzz = function(num) {
    if (num % 5 === 0) return "Buzz";
};

let fizzBuzz = function(num) {
    if ((num % 5 === 0) && ((num % 3 === 0))) return "FizzBuzz";
};

for (let i = 1; i <= 100; i++) {

    console.log(fizzBuzz(i) || fizz(i) || buzz(i) || i);
    
}

