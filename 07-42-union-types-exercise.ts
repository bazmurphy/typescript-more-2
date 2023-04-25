// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

let highScore: number | boolean;
highScore = 100;
highScore = true;
// Type '"yes"' is not assignable to type 'number | boolean'.
highScore = "yes";

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff: number[] | string[] = [];
stuff = [1, 2, 3, 4];
stuff = ["1", "2", "3", "4"];
// Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
stuff = [1, "1"];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

type skillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

let skill: skillLevel = "Advanced";
// Type '"Zero"' is not assignable to type 'skillLevel'.
skill = "Zero";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: skillLevel;
};

let student1: SkiSchoolStudent = {
  name: "Baz",
  age: 99,
  sport: "snowboard",
  level: "Beginner",
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

// Create an array called colors that can hold a mixture of RGB and HSL color types

type RGBColor = {
  r: number;
  g: number;
  b: number;
};

type HSLColor = {
  h: number;
  s: number;
  l: number;
};

const arrayOfColors: (RGBColor | HSLColor)[] = [];
arrayOfColors.push({ r: 255, g: 255, b: 255 });
arrayOfColors.push({ h: 200, s: 50, l: 50 });
console.log(arrayOfColors);

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

function greet(name: string | string[]): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else if (Array.isArray(name)) {
    for (const element of name) {
      console.log(`Hello, ${element}`);
    }
  }
}

greet("Baz");
greet(["Baz", "Bill", "Bob"]);
