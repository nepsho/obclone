"use strict";

const deepcopy = require("../index");

function objectTest() {
  var c = { a: 1, b: 2 };
  var d = deepcopy(c);

  // 1
  if (c === d) throw new Error("Test fail at 1");

  c.e = 100;

  // 2
  if (d.e === 100) throw new Error("Test fail at 2");
}

function arrayTest() {
  var c = [];
  var d = deepcopy(c);

  var c = [];
  var d = deepcopy(c);

  // 3
  if (c === d) throw new Error("Test fail at 3");

  c.push(100);

  // 4
  if (d.length === 1) throw new Error("Test fail at 4");
}

// run all test cases
function init() {
  objectTest();
  arrayTest();
}

init();
console.log("All test cases passed");