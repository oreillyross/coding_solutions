"use strict";

// taken from http://www.thatjsdude.com/interview/js1.html

/* verify a prime number 

Imperative solution 
a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1
*/


function isPrime(n) {
    
    var divisor = 2;
    
    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor++;
        }
    }
    
    return true;
}

// testing the function

console.log("137 is a prime:  " + isPrime(137));
console.log("237 is a prime:  " + isPrime(237));


/* How could you find all prime factors of a number
  Run a while loop. start dividing by two and if not divisible increase divider until u r done
*/

function primeFactors(n) {
    var factors = [];
    var divisor = 2;
    
    while (n > 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    
    return factors;
}

// testing the function

console.log(primeFactors(69));

/* How to get nth Fibonacci number 
  non recursive version - time complexity is o(n) linear complexity
*/

function fibonacci(n) {
    var fibo = [0, 1];
    
    if (n <= 2) return 1;
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }  
        
    return fibo[n];
    
}

// testing non-recursive version

console.log(fibonacci(12));

// recursive version - complesity is 0(2^n)

function fibonacci1(n) {
    if (n <= 1) { 
      return n;
    } else {
        return fibonacci1(n - 1) + fibonacci1(n - 2);
    }
}

// testing recursive version

console.log(fibonacci1(12));

/* Find the greatest common divisor of two numbers.  */

// Imperative solution

var greatestCommonDivisor  = function(a, b) {
    
    let divisor = 2,
        greatestDivisor = 1;
        
    if (a < 2 || b < 2) {
        return 1;
    }    
    
    while (a >= divisor && b >= divisor) {
        if (a % divisor === 0 && b % divisor === 0) {
            greatestDivisor =  divisor;
        }
        divisor++;
    }
    
    return greatestDivisor;
    
    
} 

// testing

console.log(greatestCommonDivisor(14,21));



// Functional approach using recursion.









