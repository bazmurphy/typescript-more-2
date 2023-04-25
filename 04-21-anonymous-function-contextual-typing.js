"use strict";
const colors = ["red", "orange", "yellow"];
// if we define a regular function then colour has type ANY
function randomName(color) {
    // Parameter 'color' implicitly has an 'any' type.
    return color;
}
// but in the case below the color parameter is INFERRED to be type STRING
//  because of the CONTEXT that is is CALLED IN
colors.map((color) => color.toUpperCase());
