"use strict";
const movies = ["Predator", "Aliens", "Terminator", "Robocop"];
// TypeScript infers the type of this variable is any
let foundMovie;
// let foundMovie: any
for (let movie of movies) {
    if (movie === "Terminator") {
        foundMovie = "Terminator";
    }
}
// because its "any" we can still do things like
foundMovie();
foundMovie = 1;
foundMovie.randomMethod();
// So we should AVOID using any;
let foundMovie2;
// This expression is not callable. Type 'String' has no call signatures.
foundMovie2();
// So this is the way to PREVENT the implicit ANY
