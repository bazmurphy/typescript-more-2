// Void
// Void is a return type for functions that don't return anything.
// It means just that this function is void of any data.
// Typescript can infer this type fairly well,
// but sometimes it may want you to annotate a function with a void return explicitly.

// function printTwice(message: string): void
function printTwice(message: string) {
  console.log(message);
  console.log(message);
  // we don't get an error here, the problem is silent
  return "something";
}

// we don't have to define the return type but it is good practice
function printTwice2(message: string): void {
  console.log(message);
  console.log(message);
  // Type 'string' is not assignable to type 'void'.
  return "something";
}
