// Interfaces
// Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax).
// We can use them to create reusable, modular types that describe the shapes of objects

interface Person {
  name: string;
  age: number;
}

const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning ${age}!`;
};

sayHappyBirthday({ name: "Baz", age: 99 });

// Type Alias:
type Point7 = {
  x: number;
  y: number;
};

const myPoint3: Point7 = { x: 23, y: 51 };

// INTERFACES ALLOW US TO DESCRIBE THE SHAPE OF OBJECTS (AND ONLY OBJECTS)
// use the "interface" keyword and then the name of the Interface
// then { }

// Interface:
interface Point8 {
  x: number;
  y: number;
}

const myPoint4: Point8 = { x: 34, y: 46 };
