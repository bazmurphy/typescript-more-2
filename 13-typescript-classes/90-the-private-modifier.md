# The private Modifier

There is a `private` modifier
But this does not make the variable actually private.
This only works BEFORE the code is Compiled (when TypeScript is watching)

```
class Player {
  public readonly first: string;
  public readonly last: string;

  // the private modifier in TypeScript
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const bob = new Player("bob", "bobberson");
// bob.score;
// Property 'score' is private and only accessible within class 'Player'.ts(2341)
```

As opposed to the JavaScript syntax using `#`
This provides you protection NOT JUST BEFORE you compile
But actually once the code is running

```
class Player {
  public readonly first: string;
  public readonly last: string;

  // the JavaScript syntax:
  #score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```
