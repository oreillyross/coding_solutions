// ES6 methods which can replace lodash functions of same utility

const arr = [1,2,3,4,5];

const mapped = arr.map(i => i * 2 )
const reduced = arr.reduce((total, i) => total + i);
const filtered = arr.filter(i => i > 3 )

console.log(mapped);
console.log(reduced);
console.log(filtered);


