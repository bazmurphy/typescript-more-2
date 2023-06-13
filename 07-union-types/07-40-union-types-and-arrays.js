"use strict";
// If we want an Array of different Types
// we have to wrap the types in Parentheses and then add the Array after
// (type | type)[]
const stuff1 = [1, 2, 3, 4, "hello", "goodbye"];
// if we leave off the Parentheses it is NOT what we want:
// its saying its either a single number OR an Array of Strings
const stuff2 = 2;
// const stuff2: number | string[] = ["hello", "goodbye"];
// if we try to do this, it is NOT what we want:
// its saying its either an Array of Numbers OR an Array of Strings - but not MIXED
// const stuff3: number[] | string[] = [1, 2, 3, 4, "hello", "goodbye"];
const stuff4 = [1, 2, 3, 4];
const stuff5 = ["hello", "goodbye"];
const coordinates2 = [];
coordinates2.push({ x: 3.2, y: 2.6 });
coordinates2.push({ lat: 28.23, long: 23.12 });
console.log(coordinates2);
// [ { x: 3.2, y: 2.6 }, { lat: 28.23, long: 23.12 } ]
