// Union Types
// Union types allow us to give a value a few different possible types.
// If the eventual value's type is included, Typescript will be happy.
// We can create a union type by using the single | (pipe character) to separate the types we want to include.
// It's like saying, "This thing is allowed to be this, this, or this".
// Typescript will enforce it from there.

let age2: number | string = 21;
age2 = 23;
age2 = "24";

// You can also use Type Aliases with Type Aliases
type Point5 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 2, y: 34 };
coordinates = { lat: 28.23, long: 23.12 };
