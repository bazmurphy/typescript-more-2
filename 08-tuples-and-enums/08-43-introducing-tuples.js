"use strict";
// Tuples
// Tuples are a special type exclusive to TypeScript (they don't exist in JS)
// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.
// before we did this, but this doesn't tell us specifically how many, or the order
const stuff3 = ["abc", "def", "ghi"];
// Tuples are FIXED in Length AND their TYPES
let myTuple;
myTuple = [10, "Typescript is fun!"];
// Type 'string' is not assignable to type 'number'.
// Type 'number' is not assignable to type 'string'.
myTuple = ["Typescript is fun!", 10];
const color1 = [255, 255, 0];
// Type 'string' is not assignable to type 'number'.
const color2 = [255, 255, "a"];
// Type '[number, number, number, number]' is not assignable to type '[number, number, number]'.
// Source has 4 element(s) but target allows only 3.
const color3 = [255, 255, 0, 255];
