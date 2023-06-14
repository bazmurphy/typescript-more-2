class Player {
  // [1] so we must tell TypeScript every instance of this Class has a property first and last and they are both strings
  // (!) we cannot do it in the constructor

  // we can make these readonly so they will never change
  // we can also make them public so that other developers know they are accessible outside
  // public readonly first: string;
  // public readonly last: string;

  // if we want to add class fields in TypeScript
  // typescript will infer score is supposed to be a number
  // we can also explicitly state its a number
  // we can also make them private
  // private score: number = 0;

  // OR use the JavaScript # Syntax
  // #score: number = 0;

  // constructor(first: string, last: string) {
  //   this.first = first;
  //   // [0] Property 'first' does not exist on type 'Player'.ts(2339)
  //   this.last = last;
  //   // [0] Property 'last' does not exist on type 'Player'.ts(2339)
  // }

  // We can use this Parameter Properties ShortHand syntax for when we have a Parameter being passed in
  constructor(
    public first: string,
    public last: string,
    // note the underscore
    // private _score: number
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("Secret Method");
  }

  // everytime TypeScript sees a property name that only has a Getter and NOT a Setter
  // it will treat it as a readonly property
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  // this is just wrapping the private property with a getter that is publicly available
  get score() {
    return this._score;
  }

  // (!) TypeScript doesn't want you providing any return type annotations for Setters
  // A 'set' accessor cannot have a return type annotation.ts(1095)
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score must be >= 0");
    }
    this._score = newScore;
  }
}

const bob = new Player("bob", "bobberson", 100);

bob.score;
// Property 'score' is private and only accessible within class 'Player'.ts(2341)
// bob.#score;
// Property '#score' is not accessible outside class 'Player' because it has a private identifier.ts(18013)

// bob.secretMethod();
// Property 'secretMethod' is private and only accessible within class 'Player'.ts(2341)
// BUT IT STILL COMPILED THE CODE AND RUNS IT

// get:
bob.fullName;
// set:
// bob.fullName = "test";
// Cannot assign to 'fullName' because it is a read-only property.ts(2540)

bob.score = 99;
// TypeScript cannot know about this, because it happens at RUN TIME
// bob.score = -1;

// the protected modifier
class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  // we add a method in here to access the _score property
  maxScore() {
    // Property '_score' is private and only accessible within class 'Player'.ts(2341)
    this._score = 99999999;
  }
}

// We can make an interface
// anything using this must have a property of color of type string
interface Colorful {
  color: string;
}

// And another Interface
// anything using this must have a method print that returns void
interface Printable {
  print(): void;
}

// And then we can make different Classes that must obide by the Colorful interface
// they IMPLEMENT this Interface (or multiple Interfaces)

class Bike implements Colorful {
  // if we don't have a color property
  // Class 'Bike' incorrectly implements interface 'Colourful'.
  // Property 'color' is missing in type 'Bike' but required in type 'Colourful'.ts(2420)

  constructor(public color: string) {}
}

const bike1 = new Bike("red");

// this is another Class using the Colorful interface and also the Printable Interface
// that must fulfill both the Colorful and Printable interface
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand}`);
  }
}

const jacket1 = new Jacket("Prada", "black");

// the keyword `abstract`
// it means WE CAN NO LONGER CREATE A NEW INSTANCE of Cat on its own
abstract class Cat {}

// const kitty1 = new Cat();
// Cannot create an instance of an abstract class.ts(2511)

// So what is the point of having a Class you can't create instances from?

// with an abstract class we define methods that MUST BE IMPLEMENTED by a Child(Sub) Class
abstract class Employee {
  constructor(public first: string, public last: string) {}

  // this method DOES NOT EXIST HERE, it is simply saying it NEEDS to exist in any (Sub) Class that extends Employee
  abstract getPay(): number;

  // we can also have regular methods
  greet() {
    console.log("Hello!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  // Non-abstract class 'FullTimeEmployee' does not implement all abstract members of 'Employee'ts(18052)
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "Boop", 50000);
console.log(betty.getPay());
// 50000
const bill = new PartTimeEmployee("Bill", "Billson", 24, 1100);
console.log(bill.getPay());
// 26400
