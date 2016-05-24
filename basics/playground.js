const factorialRecursive = function(n) {
    return (n <= 1) ? 1 : n * factorialRecursive(n - 1);
};

console.log(factorialRecursive(5));
