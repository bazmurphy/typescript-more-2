// Adding Methods to an Interface

// We can describe the methods on an object, what types they accept, and what types they return

interface Person3 {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi must be a method, it must take one argument (string) and it must return a string
  // this is the first way to write it:
  sayHi: () => string;
  // this is the second way to write it:
  // sayHi(): string;
}

const baz2: Person3 = {
  id: 1838949,
  first: "Baz",
  last: "Murphy",
  nickname: "Bazy",
  sayHi: () => {
    return `Hello!`;
  },
};
