"use strict";
// the idea of the function identity is that it accepts some argument and it returns that argument
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// but we are creating the same function everytime, and we are limited to whatever Types we write the functions for
// so we could do this
// but this defeats the points of TypeScript
// and it also could mean it accepts a "string" and returns a "number"
// it doesnt mean whatever type you pass to it, it has to return
// which is not what we want
function identity1(item) {
    return item;
}
// this is where a Generic Function comes in
function identity2(item) {
    return item;
}
identity2("hello");
// function identity2<string>(item: string): string
identity2(100);
// function identity2<number>(item: number): number
identity2(true);
// and use it with our Function
identity2({ name: "Moggy", breed: "Street Cat" });
// most of the time people use uppercase T (not Type)
function identity3(item) {
    return item;
}
