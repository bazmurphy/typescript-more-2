"use strict";
// If we want to give the Interface Method Parameters
// We can use ANY name as the parameter name, it does NOT HAVE TO MATCH the original code
const shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.3));
// 70
