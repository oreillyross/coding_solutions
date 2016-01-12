"use strict";

// taken from http://www.thatjsdude.com/interview/js1.html and also other sources where relevant

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

let greatestCommonDivisor  = function(a, b) {
    
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

let functionalGCD = function(a,b) {
    if (b === 0) {
        return a;
    } else {
       return functionalGCD(b, a%b);
    }
};

console.log(functionalGCD(14,21));


/* FizzBuzz coding problem */

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

// remove duplicate members from an array

let removeDuplicates = function removeDuplicates(arr) {
    
    let exists = {},
        outArr = [],
        elm;
        
    for (let i = 0; i < arr.length; i++) {
        elm = arr[i];
        if (!exists[elm]) {
            outArr.push(elm);
            exists[elm] = true;
        }
    }    
    return outArr;
}

let arr = [1,2,2,2,3,3,4,5,6,6];

console.log(removeDuplicates(arr));

// Remove a single value, indicated by an index from an array passed in, 
// return a new array with the item removed.

let removeElem = function(arr, index) {
    return arr.slice(0, index)
      .concat(arr.slice(index + 1))
};

console.log(removeElem([1,2,3,4], 2));


// Merge two sorted arrays

let mergeSortedArray = function(a, b) {
    
    let merged = [],
        aElem = a[0],
        bElem = b[0],
        i = 1,
        j =1;
        
    while (aElem || bElem) {
        if ((aElem && !bElem) || (aElem < bElem)) {
            merged.push(aElem);
            aElem = a[i++];
        } else {
            merged.push(bElem);
            bElem = b[j++];
        }
        
    }    
 
    return merged;
}

console.log(mergeSortedArray([1,2,3,7,8],[4,5,12]));

// Swap two numbers without using a temporary variable

let swap = function(a,b) {
    
    // line by line
    
    console.log("a: " + a + " b: " + b);
    
    b = b - a;
    a = a + b;
    b = a - b;
    
    console.log("a: " + a + " b: " + b);
    
    // and a neat one liner
    console.log("a: " + a + " b: " + b);
    
    b = (a + (a = b) - b)
    
    console.log("a: " + a + " b: " + b);
    
}

swap(2,4);


// string reverse - O(n) complexity in time

let reverseStr = function(str) {
    
    let rstr = '';
    
    for (let i = str.length -1 ; i >= 0; i--) {
        rstr += str[i];
    }
    
    return rstr;
}

console.log(reverseStr("Hello"));


// recursive solution to reverse string

let rec_reverseStr = function(str) {
    if (str === "") {
        return "";
    } else {
        return rec_reverseStr(str.substr(1)) + str.charAt(0);
    }
};

console.log(rec_reverseStr("Hello"));

// Finally adding the reverse function as a method to String class

String.prototype.reverse = function() {
    
    if (!this || this.length < 2) {
        return this;
        
    } else {
        return this.split('').reverse().join('');
    }
    
}

console.log("testing".reverse());