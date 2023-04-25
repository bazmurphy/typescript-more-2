function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("87");

// When we have a function that has some sort of Union Type for a parameter(s)
// And we do something within the function that ONLY works with a String or an Operation that ONLY works with a Number

// as soon as we introduce the possibility of price being a string TypeScript yells
function calculateTax1(price: number | string, tax: number) {
  // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
  return price * tax;
}

function calculateTax2(price: number | string, tax: number) {
  // Property 'replace' does not exist on type 'string | number'.
  // Property 'replace' does not exist on type 'number'.
  price.replace("£", "");
}

// so we need to make conditional checks for the specific types
function calculateTax3(price: number | string, tax: number): number {
  if (typeof price === "string") {
    // (parameter) price: string
    price = parseFloat(price.replace("£", ""));
  }
  // (parameter) price: number
  return price * tax;
}

console.log(calculateTax3(45, 0.08));
console.log(calculateTax3("£45", 0.08));
