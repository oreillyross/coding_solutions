"use strict";


// default parameter - note: in the ES6 default paramters come in the argument list
let greet = function greet(name) {
  name = name || "default";
  console.log("hello" , name);
}


console.log(libName);

// using objects

let person = new Object();

person["first"] = "Jim";
person["last"] = "Beam";

console.log(person.first);
console.log(person["last"]);

person.address = new Object();
person.address.street = "Memory lane";
person.address.city = "Townsville";

console.log(person.address.street);
console.log(person["address"]["city"]);
