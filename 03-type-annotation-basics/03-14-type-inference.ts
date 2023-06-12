// Type Inference
// Type Inference refers to the Typescript compiler's ability to infer types from certain values in your code.
// Typescript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.

let tvShow = "The Last Of Us";
tvShow = "The Mandalorian";
// Type 'boolean' is not assignable to type 'string'.
tvShow = false;

// Type 'number' is not assignable to type 'boolean'.
let isFunny = false;
isFunny = true;
isFunny = 3;
