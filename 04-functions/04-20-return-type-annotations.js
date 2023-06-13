"use strict";
// We can add the RETURN TYPE of a FUNCTION
// We add it AFTER the parameter parentheses
// We don't have to do this, TypeScript can INFER the RETURN TYPE of a Function
// if we hover over "square" it tells us the return type is number (it is IMPLICIT)
// function square(num: any): number
function square(num) {
    return num * num;
}
// if we forget the return keyword for example it will say the RETURN IS VOID
function square2(num) {
    num * num;
}
// We can explicitly define the TYPE of the RETURN
function square3(num) {
    return num * num;
}
// It works with Annoymous Functions:
const add = (x, y) => {
    return x + y;
};
// in the below case the function could return a string or a number
// function random(num: number): string | number
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
