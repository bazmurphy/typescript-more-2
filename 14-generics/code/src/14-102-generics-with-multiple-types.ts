// We can also write Generic Functions that have more than one Type Paramter

// This function should take two objects and merge them into a single object and return it
function merge1(object1, object2) {
  // function merge(object1: any, object2: any): any
  return {
    ...object1,
    ...object2,
  };
}

const combinationObject1 = merge1(
  { firstName: "baz" },
  { interests: ["nature", "hiking", "meditation"] }
);
console.log(combinationObject1);

// we can re-write the above to accept two Generics (the same way we use i,j in for loops, we use T,U)
// and it returns an INTERSECTION of the two types
function merge2<T, U>(object1: T, object2: U) {
  // function merge2<T, U>(object1: T, object2: U): T & U
  return {
    ...object1,
    ...object2,
  };
}

const combinationObject2 = merge2(
  { firstName: "baz" },
  { interests: ["nature", "hiking", "meditation"] }
);
console.log(combinationObject2);
