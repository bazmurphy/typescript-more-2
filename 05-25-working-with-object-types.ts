// Objects
// Objects can be typed by declaring what the object should look like in the annotation.
// Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!

const cat = {
  name: "Junior",
  breed: "cat",
  age: 14,
};

// writing the annotation for a function to acccept an object as a parameter

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

// Expected 1 arguments, but got 0.
// An argument for 'person' was not provided.
printName();
// Property 'last' is missing in type '{ first: string; }' but required in type '{ first: string; last: string; }
printName({ first: "Baz" });

printName({ first: "Baz", last: "Murphy" });
