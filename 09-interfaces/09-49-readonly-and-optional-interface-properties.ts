// We can use "readonly" before a property name to make it read only
// We can use ? after a property name to make it optional

interface Person2 {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

const baz1: Person2 = { id: 182893, first: "Baz", last: "Murphy" };

baz1.first = "Anything";
// Cannot assign to 'id' because it is a read-only property.
baz1.id = 100;
