// We have a special modifier keyword we can use
// "readonly" keyword

// Helps us mark certain properties in an object or arrays or classes as readonly
// and TypeScript will yell at us if we try to change those properties

type User = {
  readonly id: number;
  username: string;
  password: string;
};

const user: User = {
  id: 1473982,
  username: "batman",
  password: "robin",
};

// if we now try to change the user.id it will complain:
// Cannot assign to 'id' because it is a read-only property.
user.id = 1784959;

// WARNING: if you use read only on an object or array (REFERENCE TYPES) you can still add to or remove things from them
// it will protect from re-assigning them though.
// so really this can only guarantee PRIMITIVE TYPES...
