"use strict";

var timing = require("./timing");
var test = require("tape");

/* test functions */
const Addingtime = function(t) {
    t.plan(1);
    
    t.equal(Date.now().toString(), timing.countDownFrom(5).toString(), "countDownFrom adds 5 minutes correctly") 
};



// test function headers
test("adding 5 minutes", Addingtime);






