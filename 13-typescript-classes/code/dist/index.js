"use strict";
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
    constructor(first, last, 
    // note the underscore
    // private _score: number
    _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
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
    set score(newScore) {
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
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    // we add a method in here to access the _score property
    maxScore() {
        // Property '_score' is private and only accessible within class 'Player'.ts(2341)
        this._score = 99999999;
    }
}
// And then we can make different Classes that must obide by the Colorful interface
// they IMPLEMENT this Interface (or multiple Interfaces)
class Bike {
    // if we don't have a color property
    // Class 'Bike' incorrectly implements interface 'Colourful'.
    // Property 'color' is missing in type 'Bike' but required in type 'Colourful'.ts(2420)
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike("red");
// this is another Class using the Colorful interface and also the Printable Interface
// that must fulfill both the Colorful and Printable interface
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}
const jacket1 = new Jacket("Prada", "black");
// the keyword `abstract`
// it means WE CAN NO LONGER CREATE A NEW INSTANCE of Cat on its own
class Cat {
}
// const kitty1 = new Cat();
// Cannot create an instance of an abstract class.ts(2511)
// So what is the point of having a Class you can't create instances from?
// with an abstract class we define methods that MUST BE IMPLEMENTED by a Child(Sub) Class
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // we can also have regular methods
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    // Non-abstract class 'FullTimeEmployee' does not implement all abstract members of 'Employee'ts(18052)
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "Boop", 50000);
console.log(betty.getPay());
// 50000
const bill = new PartTimeEmployee("Bill", "Billson", 24, 1100);
console.log(bill.getPay());
// 26400
