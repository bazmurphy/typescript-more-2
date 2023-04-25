// There is an alternate way to define the Array TYPE
// using Array< >
const someStrings: Array<string> = ["hello", "goodbye"];
const someNumbers: Array<number> = [22, 33, 44, 55];
const someBooleans: Array<boolean> = [true, false, true, false];

// We can work with our Custom Types in Arrays as well.
type Point4 = {
  x: number;
  y: number;
};

const somePoints1: Point4[] = [];
// const somePoints2: Array<Point4> = [];
somePoints1.push({ x: 33, y: 44 });
// Argument of type '{ x: number; }' is not assignable to parameter of type 'Point4'.
// Property 'y' is missing in type '{ x: number; }' but required in type 'Point4'.
somePoints1.push({ x: 33 });
