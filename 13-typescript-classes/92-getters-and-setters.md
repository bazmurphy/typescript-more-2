# Getters and Setters

`get` and `set` keywords

Everytime TypeScript sees a property name that only has a Getter and NOT a Setter

It will treat it as a readonly property

We can use `_variable` syntax to denote `private` although this doesn't actually do anything
We can then use the `get` keyword to denote a Getter
And access the `_variable` with it

We can use the `set` keyword to denote a Setter
And provide the type for the parameter
BUT we DO NOT provide ANY RETURN TYPE ANNOTATIONS for Setters. TypeScript doesn't want that.
"A 'set' accessor cannot have a return type annotation.ts(1095)"

```
class Player {
  constructor {
    public first: string,
    public last: string,
    private _score: number
  } {}

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore > 0) {
      throw new Error("Score must be >= 0");
    }
    this._score = newScore;
  }
}
```
