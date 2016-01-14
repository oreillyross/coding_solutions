"use strict";


// default parameter - note: in the ES6 default paramters come in the argument list
let greet = function greet(name) {
  name = name || "default";
  console.log("hello" , name);
}


//console.log(libName);

// using objects

let person = new Object();
person["first"] = "Jim";
person["last"] = "Beam";
person.address = new Object();
person.address.street = "Memory lane";
person.address.city = "Townsville";

// Object literals - shorthand for new Object();
let personliteral = {first: "Jim",
                      last: "Beam",
                       address: {
                         street: "Mermory lane",
                         city: "Townsville"
                       }
                     };

console.log(person.first);
console.log(person["last"]);
console.log(person.address.street);
console.log(person["address"]["city"]);


// javascripts version of namespace faking

let german = {};
let english = {};

german.greetz = "hallo";
english.greetz = "hello";
console.log(german.greetz);


// using JSON and object literals. Every valid JSON is a valid object literals

let objliteral = {
  firstname: "James",
  age: 43
}

console.log(JSON.stringify(objliteral));

let jsonVal = JSON.parse('{"firstname":"James","age":43}');

console.log(jsonVal);


// Factory functions in Javascript over classes. taken from
// https://www.youtube.com/watch?v=ImwrezYhw4w

const dog = () => {
  const sound = "woof" ;
  return {
    talk: () => console.log(sound)
  }
}
const sniffles = dog();
sniffles.talk();


// Closures example

const getSecret = (secret) => {
  return {
    get: () => secret
  };
};

test('Closure for object privacy.', assert => {
  const msg = '.get() should have access to the closure.';
  const expected = 1;
  const obj = getSecret(1);

  const actual = obj.get();

  try {
    assert.ok(secret, 'This throws an error.');
  } catch (e) {
    assert.ok(true, `The secret var is only available
      to privileged methods.`);
  }

  assert.equal(actual, expected, msg);
  assert.end();
});