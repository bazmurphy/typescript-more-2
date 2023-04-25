// Literal Types
// Literal types are not just types - but the values themselves too!
// On it's own, they may not seem useful, but combine them with unions
// and you can have very fine-tuned type options for Typescript to enforce.

// the Type zero is the LITERAL Value of 0
let zero: 0 = 0;
// Type '2' is not assignable to type '0'
zero = 2;

let hi: "hi" = "hi";
// Type '"bye"' is not assignable to type '"hi"'.
hi = "bye";

// we can combine Literal Types with Union Types to limit possible options
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// and now "today" HAS to be ONE of the ABOVE VALUES from the Type
let today: DayOfWeek = "Tuesday";
