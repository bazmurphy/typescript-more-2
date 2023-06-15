"use strict";
// We can also write Generic Functions that have more than one Type Paramter
// This function should take two object and merge them into a single object and return it
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(merge({ firstName: "baz" }, { interests: ["nature", "hiking", "meditation"] }));
