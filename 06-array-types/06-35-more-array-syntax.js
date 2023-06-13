"use strict";
// There is an alternate way to define the Array TYPE
// using Array< >
const someStrings = ["hello", "goodbye"];
const someNumbers = [22, 33, 44, 55];
const someBooleans = [true, false, true, false];
const somePoints1 = [];
// const somePoints2: Array<Point4> = [];
somePoints1.push({ x: 33, y: 44 });
// Argument of type '{ x: number; }' is not assignable to parameter of type 'Point4'.
// Property 'y' is missing in type '{ x: number; }' but required in type 'Point4'.
somePoints1.push({ x: 33 });
