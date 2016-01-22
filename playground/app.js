"use strict";

const firstName = name => name.split(" ")[1];

const firstInitial = firstName => firstName[0];

const initials = name => firstInitial(firstName(name));

console.log(initials("Doc Emmet Brown"));