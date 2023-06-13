"use strict";
// Numeric Enums
var Responses1;
(function (Responses1) {
    Responses1[Responses1["no"] = 0] = "no";
    Responses1[Responses1["yes"] = 1] = "yes";
    Responses1[Responses1["maybe"] = 2] = "maybe";
})(Responses1 || (Responses1 = {}));
var Responses2;
(function (Responses2) {
    Responses2[Responses2["no"] = 2] = "no";
    Responses2[Responses2["yes"] = 3] = "yes";
    Responses2[Responses2["maybe"] = 4] = "maybe";
})(Responses2 || (Responses2 = {}));
var Responses3;
(function (Responses3) {
    Responses3[Responses3["no"] = 2] = "no";
    Responses3[Responses3["yes"] = 10] = "yes";
    Responses3[Responses3["maybe"] = 24] = "maybe";
})(Responses3 || (Responses3 = {}));
// you can define specific values
var OrderStatus2;
(function (OrderStatus2) {
    OrderStatus2[OrderStatus2["PENDING"] = 10] = "PENDING";
    OrderStatus2[OrderStatus2["SHIPPED"] = 40] = "SHIPPED";
    OrderStatus2[OrderStatus2["DELIVERED"] = 60] = "DELIVERED";
    OrderStatus2[OrderStatus2["RETURNED"] = 90] = "RETURNED";
})(OrderStatus2 || (OrderStatus2 = {}));
// String Enums
var Responses4;
(function (Responses4) {
    Responses4["no"] = "No";
    Responses4["yes"] = "Yes";
    Responses4["maybe"] = "Maybe";
})(Responses4 || (Responses4 = {}));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
// (enum member) ArrowKeys.LEFT = "left"
ArrowKeys.LEFT;
// Heterogenous Enums
// You can also have MIXED ENUM with DIFFERENT TYPES
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses["maybe"] = "Maybe";
})(Responses || (Responses = {}));
