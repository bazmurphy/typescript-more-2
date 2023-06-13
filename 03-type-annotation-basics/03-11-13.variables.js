"use strict";
let movieTitle = "My Favourite Movie";
// let movieTitle: string
movieTitle;
movieTitle = "Another Movie";
// Type 'number' is not assignable to type 'string'.
movieTitle = 9;
movieTitle.toUpperCase();
// Property 'map' does not exist on type 'string'.
movieTitle.map();
let numCatLives = 9;
numCatLives += 1;
// Type 'string' is not assignable to type 'number'.
numCatLives = "zero";
let gameOver = false;
gameOver = true;
// Type 'string' is not assignable to type 'boolean'.
gameOver = "hello";
