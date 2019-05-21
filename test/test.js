"use strict";
const ObjCopy = require("../index");

/*
* For Object
*/


//-------------------ShallowCopy-----------------------------

var a = {a : 1, b : 2};
var b = ObjCopy.shallowcopy(a);

//1
if(a === b)
{
  console.log("pass--1");
} else {
  throw new Error("Test fail at 1");
}

a.c = 100;

//2
if(b.c == 100)
{
  console.log("pass--2");
} else {
  throw new Error("Test fail at 2");
}


//-------------------DeepCopy--------------------------------

var c = {a : 1, b : 2};
var d = ObjCopy.deepcopy(c);


//3
if(c === d)
{
  throw new Error("Test fail at 3");
} else {
  console.log("pass--3");
}

c.e = 100;

//4
if(d.e === 100)
{
  throw new Error("Test fail at 4");
} else {
  console.log("pass--4");
}

/*
* For Array
*/


//-------------------ShallowCopy-----------------------------

var a = [];
var b = ObjCopy.shallowcopy(a);

//5
if(a === b)
{
  console.log("pass--5");
} else {
  throw new Error("Test fail at 5");
}

a.push(100);

//6
if(b.length === 1)
{
  console.log("pass--6");
} else {
  throw new Error("Test fail at 6");
}


//-------------------DeepCopy--------------------------------

var c = [];
var d = ObjCopy.deepcopy(c);


//7
if(c === d)
{
  throw new Error("Test fail at 7");
} else {
  console.log("pass--7");
}

c.push(100);

//8
if(d.length === 1)
{
  throw new Error("Test fail at 8");
} else {
  console.log("pass--8");
}

console.log("All test cases passed");





