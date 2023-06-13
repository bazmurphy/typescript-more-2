"use strict";
// Enums
// Enums allow us to define a set of named constants.
// We can give these constants numeric or string values.
// There's quite a few options when it comes to enums!
// Anytime we are working in our code with a set of values that we are referencing again and again...
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
// we can use it in this way:
const myStatus = OrderStatus.DELIVERED; // 2
// or in functions:
// the status you pass in has to be OF TYPE OrderStatus
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
// ENUMS are a SET OF NAMED CONSTANTS that we can use throughout our CODE
