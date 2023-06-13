"use strict";
// We can use "readonly" before a property name to make it read only
// We can use ? after a property name to make it optional
const baz1 = { id: 182893, first: "Baz", last: "Murphy" };
baz1.first = "Anything";
// Cannot assign to 'id' because it is a read-only property.
baz1.id = 100;
