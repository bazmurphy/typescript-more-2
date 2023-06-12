// Array Types
// Arrays can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.
// Note: these arrays only allow data of that one type inside them. More on that later...

// when we tell it that it is an empty array, TypeScript will think it will ALWAYS be an Empty Array
const activeUsers: [] = [];
// So as soon as we try to add anything to it, TypeScript yells..
// Argument of type 'string' is not assignable to parameter of type 'never'.
activeUsers.push("Baz");

// also we cannot add anything to that array on initialisation..
// Type '[number]' is not assignable to type '[]'.
// Source has 1 element(s) but target allows only 0.
const activeUsers2: [] = [1];

// We must specify the TYPE followed by the Array Brackets []
const activeUsers3: string[] = [];
activeUsers3.push("Baz");
// Argument of type 'number' is not assignable to parameter of type 'string'.
activeUsers3.push(99);

const ageList: number[] = [18, 21, 30];
ageList[0] = 99;
// Type 'string' is not assignable to type 'number'.
ageList[0] = "Hello";

const checks: boolean[] = [false, true, false];
checks.push(true);
// Argument of type 'number' is not assignable to parameter of type 'boolean'.
checks.push(99);
