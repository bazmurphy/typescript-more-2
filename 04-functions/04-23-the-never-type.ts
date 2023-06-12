// Never
// The never type represents values that NEVER occur.
// We might use it to annotate a function that always throws an exception,
// or a function that never finishes executing.
// Don't confuse with void - void returns undefined or null,
// which is technically still a type of value.
// With never, a function doesn't even finish executing.

function makeError(msg: string): never {
  // Type 'undefined' is not assignable to type 'never'.
  // return undefined;
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game Loop Running...");
  }
  // Type 'boolean' is not assignable to type 'never'.
  // return true;
}
