"use strict";
// We can have mixed TYPES in a TUPLE and the ORDER DOES MATTER
const goodResponse = [200, "OK"];
const badResponse = [404, "Not Found"];
// the order matters! a number first and then a string (its a pattern)
const example = ["OK", 200];
// (!) TUPLES DO NOT PREVENT YOU FROM PUSHING ON EXTRA ELEMENTS AFTER CREATION
goodResponse.push(123);
// ITS A LIMITATION OF TUPLES
goodResponse.pop();
goodResponse.pop();
goodResponse.pop();
// its now an EMPTY ARRAY
// this is an ARRAY of HTTPResponse TUPLES
const responses = [
    [200, "OK"],
    [404, "Not Found"],
];
const example2 = { code: 200, message: "OK" };
