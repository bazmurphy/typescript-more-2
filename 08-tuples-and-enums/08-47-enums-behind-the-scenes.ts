// What do ENUMS Compile to?

enum OrderStatus3 {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

// This is the JavaScript this Compiles to:

// var OrderStatus3;
// (function (OrderStatus3) {
//     OrderStatus3[OrderStatus3["PENDING"] = 0] = "PENDING";
//     OrderStatus3[OrderStatus3["SHIPPED"] = 1] = "SHIPPED";
//     OrderStatus3[OrderStatus3["DELIVERED"] = 2] = "DELIVERED";
//     OrderStatus3[OrderStatus3["RETURNED"] = 3] = "RETURNED";
// })(OrderStatus3 || (OrderStatus3 = {}));

// This results in NEW CODE in our JavaScript

// The community is moving away from this idea.. away from new syntax and code that impacts your code as much...
// Enums were a very EARLY ADDITION to the TypeScript Language

const order1 = {
  orderNumer: 284985905,
  status: OrderStatus3.PENDING,
};

// some people do not like POLLUTING THEIR CODE WITH THE Compiled JavaScript above..
// POLLUTING THE "NAMESPACE"

// so they put "const" before the "enum" KEYWORD
// it doesn't make it a regular "const" but it ERASES all the added Compiled code (above)
// and it REPLACES every reference from orderStatus with the underlying number

const enum OrderStatus4 {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const order2 = {
  orderNumer: 284985905,
  status: OrderStatus4.PENDING,
};

// JavaScript Compiled Code:
// const order2 = {
//   orderNumer: 284985905,
//   status: 0 /* OrderStatus4.PENDING */,
// };
