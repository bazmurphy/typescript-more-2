// We can have InterSection Types which means we can combine types using an AMPERSAND &

type Circle = {
  radius: number;
};

type Colorful = {
  color: String;
};

// this type is the INTERSECTION of the Circle and Colorful Types
type ColorfulCircle = Circle & Colorful;

// and this object meets that criteria now:
const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

// We can add additional properties
// CatDog is the INTERSECTION of Cat and Dog and this new type "age" we are making inline
type CatDog = Cat &
  Dog & {
    age: number;
  };

// and now our Type above can be used:
const abomination: CatDog = {
  numLives: 6,
  breed: "Corgi",
  age: 11,
};
