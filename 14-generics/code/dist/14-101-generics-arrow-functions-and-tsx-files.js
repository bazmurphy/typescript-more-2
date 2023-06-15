"use strict";
// Becuase We use Angle Brackets in JSX all the time
//  <></>;
// But we use the same Syntax with Generics <T>
// And so TypeScript gets confused
// It understands this on regular function definitions
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
// but with arrow function syntax i thinks the <T> is a JSX Tag
// so you have to write a TRAILING comma so TypeScript understands
const getRandomElementArrow = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};
