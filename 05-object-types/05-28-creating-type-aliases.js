"use strict";
// Type Alias
// Instead of writing out object types in an annotation, we can declare them separately in a type alias,
// which is simply the desired shape of the object.
// This allows us to make our code more readable and even reuse the types elsewhere in our code.
let coordinate2 = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
let age = 99;
