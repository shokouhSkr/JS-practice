"use strict";

console.log(me); // undefined
console.log(job); // ReferenceError: cannot accsess 'job' before initailizstion
console.log(age); // nothing!

var me = "jonas";
let job = "teacher";
const age = 1991;
