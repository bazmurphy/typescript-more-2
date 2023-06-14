# Classes and Interfaces

Interfaces can be the shape of an `Object` but can also be the shape of a `Class`

We can write multiple Interfaces

```
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}
```

And then we can make different Classes that must IMPLEMENT (and abide by) the `Colorful` `interface` and/or the `Printable` `interface`

```
class Bike implements Colorful {
  constructor(public color: string) {}
}
```

^ if we don't have a color property

```
Class 'Bike' incorrectly implements interface 'Colourful'.
Property 'color' is missing in type 'Bike' but required in type 'Colourful'.ts(2420)
```

We can make another `Class` using the `Colorful` `interface` and also the `Printable` `interface`
that must fulfill both the Colorful and Printable interface

```
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand}`);
  }
}
```

```
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
```
