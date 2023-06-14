# readonly Class Properties

We can use a readonly modifier in Classes
It can help identify issues
It is unique to TypeScript

```
class Player {
  readonly first: string;
  readonly last: string;

  score = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```
