// recursive length function constructed from first principles using the 
// new ES6 spread operator, destructuring of args.
/*
const length = ([first, ...rest]) =>
  first === undefined
    ? 0
    : 1 + length(rest);
  */  


// Sum all function written using rest operator and arrow functions, nice and functional
const sumAll = (...numbers) => numbers.reduce((total,next) => total + next)
