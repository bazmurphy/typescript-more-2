// We can RE-OPEN and ADD NEW PROPERTIES OR METHODS to Interfaces AFTER we have DEFINED THEM

interface Person4 {
  name: string;
}

interface Person4 {
  age: number;
}

// WE ARE NOT RE-DEFINING THE INTERFACE
// WE ARE RE-OPENING IT AND ADDING TO IT, THEY WILL COMBINE
// saying "Person" also has an AGE

const person1: Person4 = {
  name: "Baz",
  age: 99,
};

// You wouldn't do it like this,
// but you might have an interface in a File coming from somewhere else or a Third Party Library,
// and you want to ADD TO IT

// lets pretend this is coming from another file or somewhere else
interface Animal4 {
  name: string;
  age: number;
}

// now in our own code we want to add a property and a method

interface Animal4 {
  breed: string;
  meow(): string;
}

// and in this way we can RE-OPEN & ADD-ON to existing Interfaces brought in from elsewhere

const cat2: Animal4 = {
  name: "Garfield",
  age: 10,
  breed: "Ginger Cat",
  meow() {
    return `Meowwww`;
  },
};
