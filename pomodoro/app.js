"use strict"

var $ = require("jquery");


$("<h1>test passes</h1>").appendTo("body");
console.log($("body").html());
