# Annotating Classes in TypeScript

If we try to make a class in TypeScript we will run into the first two issues:

1. we must provide the constructor parameters with types

2. we need to declare the types in the constructor but we cannot do that inside of the constructor

`this.first = first`

`Property 'first' does not exist on type 'Player'.ts(2339)`

`this.first: string = first;`

`'string' only refers to a type, but is being used as a value here.ts(2693)`

3. so we can declare those properties and methods at the top and declare their types

```
class Player {
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```
