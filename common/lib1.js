"use strict";

//let libName = "Lib 1"

var dog = function dog() {
  var sound = "woof";
  return {
    talk: function talk() {
      return console.log(sound);
    }
  };
};
var sniffles = dog();
sniffles.talk();
