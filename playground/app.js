"use strict";

const pipe = require("ramda").pipe;
const firstName = name => name.split(" ")[1];
const firstInitial = firstName => firstName[0];


const initials = pipe(firstName, firstInitial);

console.log(initials("Doc Emmet Brown"));
