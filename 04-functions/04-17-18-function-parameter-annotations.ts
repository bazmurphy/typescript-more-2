// Parameter 'num' implicitly has an 'any' type.

// num is currently type ANY
function square(num) {
  // which means it will allow us to do this:
  num.toUpperCase();

  return num * num;
}

square(3);
// and to do this:
square("hello");
square(true);

// now from above let's specify "num"s type as a number
function square2(num: number) {
  // Property 'toUpperCase' does not exist on type 'number'.
  num.toUpperCase();

  return num * num;
}

square2(3);
// Argument of type 'string' is not assignable to parameter of type 'number'.
square2("hello");
// Argument of type 'boolean' is not assignable to parameter of type 'number'.
square2(true);

function greet(person: string) {
  // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
  person * person;
  return `Hi, ${person}!`;
}

greet("Baz");
// Argument of type 'number' is not assignable to parameter of type 'string'.
greet(1);
// Argument of type 'boolean' is not assignable to parameter of type 'string'.
greet(true);

// we can give types to each of the multiple parameters
const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("Baz", 99, true);
// Expected 3 arguments, but got 1.
// An argument for 'age' was not provided.
doSomething("Baz");
// Argument of type 'number' is not assignable to parameter of type 'boolean'.
doSomething("Baz", 99, 1234);
