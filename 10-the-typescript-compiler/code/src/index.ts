interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 2,
};

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 5,
  name: "Juniper",
  age: 1,
};

// When we have strict "false", we get this HINT :
// Parameter 'thing' implicitly has an 'any' type, but a better type may be inferred from usage. ts(7044)
// If we have strict "true", we get this ERROR:
// Parameter 'thing' implicitly has an 'any' type. ts(7006)
function doThing(thing) {
  console.log(thing);
}

// strictNullChecks : true
// we should add an | null to allow it to be something OR null
let users: string[] | null = ["users1", "users2"];
// Type 'null' is not assignable to type 'string[]'. ts(2322)
users = null;
// Type 'undefined' is not assignable to type 'string[]'. ts(2322)
users = undefined;
