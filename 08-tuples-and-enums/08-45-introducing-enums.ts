// Enums
// Enums allow us to define a set of named constants.
// We can give these constants numeric or string values.
// There's quite a few options when it comes to enums!

// Anytime we are working in our code with a set of values that we are referencing again and again...

enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

// we can use it in this way:
const myStatus = OrderStatus.DELIVERED; // 2

// or in functions:
// the status you pass in has to be OF TYPE OrderStatus
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// ENUMS are a SET OF NAMED CONSTANTS that we can use throughout our CODE
