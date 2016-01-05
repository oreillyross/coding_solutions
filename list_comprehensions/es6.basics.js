// recursive length function constructed from first principles using the 
// new ES6 spread operator, destructuring of args.

const length = ([first, ...rest]) =>
  first === undefined
    ? 0
    : 1 + length(rest);