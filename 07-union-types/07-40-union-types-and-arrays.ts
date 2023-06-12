// If we want an Array of different Types
// we have to wrap the types in Parentheses and then add the Array after
// (type | type)[]
const stuff1: (number | string)[] = [1, 2, 3, 4, "hello", "goodbye"];

// if we leave off the Parentheses it is NOT what we want:
// its saying its either a single number OR an Array of Strings
const stuff2: number | string[] = 2;
// const stuff2: number | string[] = ["hello", "goodbye"];

// if we try to do this, it is NOT what we want:
// its saying its either an Array of Numbers OR an Array of Strings - but not MIXED
// const stuff3: number[] | string[] = [1, 2, 3, 4, "hello", "goodbye"];
const stuff4: number[] | string[] = [1, 2, 3, 4];
const stuff5: number[] | string[] = ["hello", "goodbye"];

type Point6 = {
  x: number;
  y: number;
};

type Loc2 = {
  lat: number;
  long: number;
};

const coordinates2: (Point6 | Loc2)[] = [];
coordinates2.push({ x: 3.2, y: 2.6 });
coordinates2.push({ lat: 28.23, long: 23.12 });
console.log(coordinates2);
// [ { x: 3.2, y: 2.6 }, { lat: 28.23, long: 23.12 } ]
