# The public Modifier

By default in JavaScript and TypeScript every single property and method in a Class is considered Public

You don't need to really use it
But you can use it to indicate that anybody can access this property or method
`public` is visibility, `readonly` is write permissions

```
class Player {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```
