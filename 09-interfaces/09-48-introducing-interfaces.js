"use strict";
// Interfaces
// Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax).
// We can use them to create reusable, modular types that describe the shapes of objects
const sayHappyBirthday = (person) => {
    return `Hey ${person.name}, congrats on turning ${age}!`;
};
sayHappyBirthday({ name: "Baz", age: 99 });
const myPoint3 = { x: 23, y: 51 };
const myPoint4 = { x: 34, y: 46 };
