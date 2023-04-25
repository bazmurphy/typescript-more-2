"use strict";
// In normal JS you can do this to set a default value on the parameter
function blabla(num = 10) { }
// we should put the default parameter after the type
function greet(person = "stranger") {
    return `Hi there, ${person}!`;
}
greet();
// Hi there, stranger!
greet("Baz");
// Hi there, Baz!
