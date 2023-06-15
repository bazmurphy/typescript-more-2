// in many cases TypeScript can INFER a type

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// We can OMIT the <Type>
// And TypeScript will INFER the type and the return

// console.log(getRandomElement<number>([1, 2, 3, 4]));
console.log(getRandomElement([1, 2, 3, 4]));
// console.log(getRandomElement<string>(["a", "b", "c", "d"]));
console.log(getRandomElement(["a", "b", "c", "d"]));

// But this does not work on all Generics
// for example:
const button1 = document.querySelector(".button1");
// ^ There is no way TypeScript can INFER which type of DOM Element this is (on a different file)
// So it will use a DEFAULT

// We have to specifically define it:
const button2 = document.querySelector<HTMLButtonElement>(".button2");

// And that's because theres no relationship between this argument..
// which is a string, a classname or id or element type
// but that doesn't tell TypeScript anything about the return type (a DOM Element)
