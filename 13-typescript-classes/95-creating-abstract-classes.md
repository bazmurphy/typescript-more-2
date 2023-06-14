# Abstract Classes

Abstract Classes do not exist in JavaScript only in TypeScript

If you add the `abstract` keyword you CANNOT Instantiate this Class

```
abstract class Cat {}

const kitty1 = new Cat();
// Cannot create an instance of an abstract class.ts(2511)
```

So what is the point of having a Class you can't create instances from?

You can use the `abstract` keyword again inside the Class to mark methods as required.
And that means in a Child Class those Methods MUST be IMPLEMENTED

And that method does not exist on the `abstract` Parent Class but it is simply saying any Sub/Child Classes that extend this Parent Class MUST have that method

We can also have regular Methods on the `abstract` Parent Class

```
abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;

  greet() {
    console.log("Hello!");
  }
}
```

We can then create Child(Sub) Classes.
And we must provide the abstract method defined in the Parent Class or TypeScript will complain:
`Non-abstract class 'FullTimeEmployee' does not implement all abstract members of 'Employee'ts(18052)`

```
class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
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
```
