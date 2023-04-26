// Numeric Enums
enum Responses1 {
  no, // 1
  yes, // 2
  maybe, // 3
}

enum Responses2 {
  no = 2, // 2
  yes, // 3
  maybe, // 4
}

enum Responses3 {
  no = 2, // 2
  yes = 10, // 10
  maybe = 24, // 24
}

// you can define specific values
enum OrderStatus2 {
  PENDING = 10,
  SHIPPED = 40,
  DELIVERED = 60,
  RETURNED = 90,
}

// String Enums
enum Responses4 {
  no = "No",
  yes = "Yes",
  maybe = "Maybe",
}

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// (enum member) ArrowKeys.LEFT = "left"
ArrowKeys.LEFT;

// Heterogenous Enums
// You can also have MIXED ENUM with DIFFERENT TYPES
enum Responses {
  no = 0,
  yes = 1,
  maybe = "Maybe",
}
