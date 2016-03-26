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
