# Class Fields in TypeScript

If we want to add Class Fields in Typescript

We can just add them near the top of the class
We do not need to declare const/let
We just use the variable name and then a value
And TypeScript will infer the type

```
class Player {
  first: string;
  last: string;

  score = 0;   // if we want to add class fields in TypeScript
  // typescript will infer score is supposed to be a number

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```
