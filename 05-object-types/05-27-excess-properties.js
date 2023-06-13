"use strict";
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Mick", last: "Jagger" });
//  Object literal may only specify known properties, and 'extra' does not exist in type '{ first: string; last: string; }'
printName({ first: "Mick", last: "Jagger", extra: "Extra Property" });
// but if we make this object
const singer = { first: "Mick", last: "Jagger", extra: "Extra Property" };
// and pass it through to the function, we DON'T GET AN ERROR... WHY?
printName(singer);
// it was a decision that was made with TypeScript
// generally if you have a variable that has the properties you need, but it also has other extra stuff
// we can pass that object in as an argument and TypeScript is only going to check if "first" and "last" are there
// but it does an additional check when you provide an Object Literal DEFINED inline (inside the function parameters)
// the decision was made so you only pass the properties required anything else that's extra is a mistake
// so if you do it inline in an object literal TypeScript will yell
// but if you do it separately in an object first then it will only check for the properties we outlined and any extra properties are ignored
