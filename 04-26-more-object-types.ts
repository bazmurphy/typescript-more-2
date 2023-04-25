// we can setup the type for an Object Literal in this way:
// you are saying "this is the pattern it should follow"
let coordinate: { x: number; y: number } = {
  x: 34,
  y: 20,
};

// here the { x: number, y: number} DENOTE the OBJECT TYPE that is RETURNED by the FUNCTION
function makeRandomCoordinate(): { x: number; y: number } {
  // Type '{}' is missing the following properties from type '{ x: number; y: number; }': x, y
  // return {};
  return { x: Math.random(), y: Math.random() };
}
