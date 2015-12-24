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






