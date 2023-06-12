// Interfaces can only be used to DESCRIBE THE SHAPE OF OBJECTS

// INTERFACE :
// We can RE-OPEN THEM and ADD ON after they have been defined

interface ExampleInterface {
  name: string;
}

interface ExampleInterface {
  age: number;
}

const myExample: ExampleInterface = {
  name: "Baz",
  age: 99,
};

// TYPE :
// We CANNOT ADD ON TO THEM after they have been defined

type ExampleType1 = {
  name: string;
};

type ExampleType1 = {
  age: number;
};

const myExample2: ExampleType1 = {
  name: "Baz",
  age: 99,
};

// But we CAN do it like this (using the &):
type ExampleType2 = {
  name: string;
};

type ExampleType3 = ExampleType2 & {
  age: number;
};

const myExample3: ExampleType3 = {
  name: "Baz",
  age: 99,
};
