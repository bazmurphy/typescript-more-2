interface Person5 {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// we can extend an interface from multiple interfaces
interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const bob: Engineer = {
  name: "Bob",
  age: 99,
  id: 181839,
  email: "bob@gmail.com",
  level: "Junior",
  languages: ["JavaScript", "TypeScript"],
};
