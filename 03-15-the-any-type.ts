// Any
// 'any' is an escape hatch! It turns off type checking for this variable so you can do your thing.
// NOTE: it sort of defeats the purpose of TS and types, so use it sparingly!

let thing: any = "hello";
thing = 1;
thing = false;
thing();
// there is no toUpperCase method on a boolean
thing.toUpperCase();

let thing2 = "hello";
// This expression is not callable. Type 'String' has no call signatures.
thing2();
// Property 'randomMethod' does not exist on type 'string'.
thing2.randomMethod();
