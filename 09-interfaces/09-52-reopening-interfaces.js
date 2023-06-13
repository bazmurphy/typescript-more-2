"use strict";
// We can RE-OPEN and ADD NEW PROPERTIES OR METHODS to Interfaces AFTER we have DEFINED THEM
// WE ARE NOT RE-DEFINING THE INTERFACE
// WE ARE RE-OPENING IT AND ADDING TO IT, THEY WILL COMBINE
// saying "Person" also has an AGE
const person1 = {
    name: "Baz",
    age: 99,
};
// and in this way we can RE-OPEN & ADD-ON to existing Interfaces brought in from elsewhere
const cat2 = {
    name: "Garfield",
    age: 10,
    breed: "Ginger Cat",
    meow() {
        return `Meowwww`;
    },
};
