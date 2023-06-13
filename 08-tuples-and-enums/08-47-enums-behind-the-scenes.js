"use strict";
// What do ENUMS Compile to?
var OrderStatus3;
(function (OrderStatus3) {
    OrderStatus3[OrderStatus3["PENDING"] = 0] = "PENDING";
    OrderStatus3[OrderStatus3["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus3[OrderStatus3["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus3[OrderStatus3["RETURNED"] = 3] = "RETURNED";
})(OrderStatus3 || (OrderStatus3 = {}));
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
const order2 = {
    orderNumer: 284985905,
    status: 0 /* OrderStatus4.PENDING */,
};
// JavaScript Compiled Code:
// const order2 = {
//   orderNumer: 284985905,
//   status: 0 /* OrderStatus4.PENDING */,
// };
