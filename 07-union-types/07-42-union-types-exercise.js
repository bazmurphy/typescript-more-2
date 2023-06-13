"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
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
let stuff = [];
stuff = [1, 2, 3, 4];
stuff = ["1", "2", "3", "4"];
// Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
stuff = [1, "1"];
let skill = "Advanced";
// Type '"Zero"' is not assignable to type 'skillLevel'.
skill = "Zero";
let student1 = {
    name: "Baz",
    age: 99,
    sport: "snowboard",
    level: "Beginner",
};
const arrayOfColors = [];
arrayOfColors.push({ r: 255, g: 255, b: 255 });
arrayOfColors.push({ h: 200, s: 50, l: 50 });
console.log(arrayOfColors);
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name) {
    if (typeof name === "string") {
        console.log(`Hello, ${name}`);
    }
    else if (Array.isArray(name)) {
        for (const element of name) {
            console.log(`Hello, ${element}`);
        }
    }
}
greet("Baz");
greet(["Baz", "Bill", "Bob"]);
