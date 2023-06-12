// If we want to give the Interface Method Parameters
// We can use ANY name as the parameter name, it does NOT HAVE TO MATCH the original code

interface Product2 {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product2 = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.3));
// 70
