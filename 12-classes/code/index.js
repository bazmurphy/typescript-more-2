"use strict";
// class Keyword
class Player {
  // if we put the static keyword in front of a property or method
  // it tells javascript that it exists on the class itself
  // and will not exist on each individual instance
  static description = "Player In Our Game";

  // this is the newer way to do it "Class Fields"
  // BUT only on values which are hardcoded
  // score = 0;
  // numLives = 10;

  // we can add a # to make the property PRIVATE
  #score = 0;
  #numLives = 10;

  constructor(first, last) {
    // constructor is automatically called on instantiation
    console.log("constructor function automatically called");
    // define class properties
    this.first = first;
    this.last = last;
    // this the traditional way to defined hardcoded ones (see above):
    // this.score = 0;
    // this.numLives = 10;
  }
  // define class method
  taunt() {
    console.log("Booyah!");
  }

  loseLife() {
    this.numLives -= 1;
  }

  // now that score is #score
  // if we want to get it we could make a method
  getScore() {
    return this.#score;
  }

  // and if we want to update the score we can use another method
  setScore(newScore) {
    this.#score = newScore;
  }

  // we can make PRIVATE METHODS too
  #secret() {
    console.log("Secret!");
  }

  // GETTER SYNTAX
  // it looks like a method inside the class
  // but is called on the instance without ()
  get fullName() {
    return `${player1.first} ${player1.last}`;
  }

  get score() {
    return this.#score;
  }

  // SETTER SYNTAX

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be >= 0 ");
    }
    this.#score = newScore;
  }

  // STATIC METHODS
  static randomPlayer() {
    return new Player("randomFirstName", "randomLastName");
  }
}

// instantiate new player
const player1 = new Player("bob", "bobson");
console.log(player1);

player1.taunt();

console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

// console.log(player1.#score);
// Uncaught SyntaxError: reference to undeclared private field or method #score

// but this works:
console.log(player1.getScore());
player1.setScore(15);
console.log(player1.getScore());
console.log(player1);

// console.log(player1.#secret());
// Property '#secret' is not accessible outside class 'Player' because it has a private identifier.ts(18013)

// we don't CALL THIS GETTER with ()
// we treat it as a PROPERTY
console.log(player1.fullName);

// we use the SETTER
player1.fullName = "john johnson";
console.log(player1.fullName);

console.log(player1.score);
// player1.score = -10;
// Uncaught Error: Score must be >= 0
// we use the SETTER
player1.score = 20;
console.log(player1.score);

// showing the static property exists on the Class
console.log(Player.description);
// "Player In Our Game"

// but not on the instance
console.log(player1.description);
// undefined

// showing the static method exists on the Class
console.log(Player.randomPlayer);
const player3 = Player.randomPlayer();
console.log(player3);

// but not on the instance
console.log(player1.randomPlayer);

// We can have another Class that INHERITS from a Parent Class
class AdminPlayer extends Player {
  // the "super" Keyword
  // super comes into play when we have a class inheriting or extending another class
  // it specifically comes into play when we have a constructor added on to this child class
  // JavaScript automatically calls the constructor function of the Parent Class

  // if we wanted to  add a powers argument
  // we could do this:
  // BUT WE STILL HAVE THE PARENT Player constructor
  // ONLY ONE will run, and it will be the AdminPlayer one
  // and the Player constructor gets ignored
  // constructor(powers) {
  //   this.powers = powers;
  // }
  // so we get an Error:
  // Uncaught ReferenceError: must call super constructor before using 'this' in derived class constructor

  constructor(first, last, powers) {
    // we have to call the parent constructor first using super();
    // pass through any values we want
    // and then do the other stuff you want in the Child Class constructor
    super(first, last);
    this.powers = powers;
  }

  // if we want shared functionality to inherit, we don't need to rewrite it
  isAdmin = true;
}

const admin = new AdminPlayer("john", "johnson", ["restore", "delete"]);
console.log(admin);
