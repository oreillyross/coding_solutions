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






