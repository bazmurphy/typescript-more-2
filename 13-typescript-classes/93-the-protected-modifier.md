# The protected Modifier

When we use the `private` keyword in TypeScript on a Class property or method
It is saying that this is ONLY ACCESSIBLE in this EXACT CLASS
So in Child Classes that `extends` the Parent Class we do not have access to the `private` properties/methods

```
class Player {
  constructor(private _score: number) {

  }
}

class SuperPlayer extends Player {
  ...

  maxScore() {
    // Property '_score' is private and only accessible within class 'Player'.ts(2341)
    this._score = 99999999;
  }
}
```

But if we change `private` to `protected` it means you cannot access `_variable` outside of the Class EXCEPT FOR in any Child Classes

(Since the whole point of extending a Class to is to share functionality from the Parent Class)

```
class Player {
  constructor(protected _score: number) {

  }
}

class SuperPlayer extends Player {
  ...

  maxScore() {
    this._score = 99999999;
  }
}
```
