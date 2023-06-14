# Parameters Properties Shortand

Instead of this, where we are repeating first & last several times:

```
class Player {
  public readonly first: string;
  public readonly last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```

We can use a Shorthand like this:

```

class Player {
  constructor(public first: string, public last: string) {

  }
}

```
