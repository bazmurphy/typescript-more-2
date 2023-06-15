"use strict";
// we want to provide an array of a specific type
// and return a random element from that array (which will be the same type)
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement([1, 2, 3, 4]));
console.log(getRandomElement(["a", "b", "c", "d"]));
const arrayOfCats = [
    { name: "fluffy", breed: "pure" },
    { name: "moggy", breed: "mix" },
    { name: "mr cat", breed: "sphynx" },
];
console.log(getRandomElement(arrayOfCats));
