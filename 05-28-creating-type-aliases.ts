// Type Alias
// Instead of writing out object types in an annotation, we can declare them separately in a type alias,
// which is simply the desired shape of the object.
// This allows us to make our code more readable and even reuse the types elsewhere in our code.

type Point = {
  x: number;
  y: number;
};

let coordinate2: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// You could make a Type Alias for a primitive type if you wanted
// Maybe if you want more control(?)
type myNum = number;
let age: myNum = 99;
