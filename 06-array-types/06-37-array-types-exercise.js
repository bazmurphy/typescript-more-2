"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
ages.push(18, 21, 30);
console.log(ages);
// [ 18, 21, 30 ]
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
gameBoard.push(["X"], ["O"], ["X"]);
console.log(gameBoard);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    return products.reduce((total, current) => total + current.price, 0);
}
const products = [
    { name: "Orange", price: 0.5 },
    { name: "Apple", price: 0.25 },
    { name: "Pear", price: 0.5 },
    { name: "Banana", price: 0.2 },
];
console.log(getTotal(products));
// 1.45
