// the idea of the function identity is that it accepts some argument and it returns that argument
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}
// but we are creating the same function everytime, and we are limited to whatever Types we write the functions for

// so we could do this
// but this defeats the points of TypeScript
// and it also could mean it accepts a "string" and returns a "number"
// it doesnt mean whatever type you pass to it, it has to return
// which is not what we want
function identity1(item: any): any {
  return item;
}

// this is where a Generic Function comes in
function identity2<Type>(item: Type): Type {
  return item;
}

identity2<string>("hello");
// function identity2<string>(item: string): string
identity2<number>(100);
// function identity2<number>(item: number): number
identity2<boolean>(true);
// function identity2<boolean>(item: boolean): boolean

// We have established a relationship that whatever the input type is, that will be the return type

// we can create an Interface
interface Cat {
  name: string;
  breed: string;
}

// and use it with our Function
identity2<Cat>({ name: "Moggy", breed: "Street Cat" });

// most of the time people use uppercase T (not Type)
function identity3<T>(item: T): T {
  return item;
}
