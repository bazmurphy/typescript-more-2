// this is a method that accepts a Type
// if we hover of it we can see <keyof HTMLElementTagNameMap>
// if we assign it to a variable and hover over that "Element | null"
// Element is just any Element
const input1 = document.querySelector("#username");
console.log(input1);
// input1.value;
// 'input1' is possibly 'null'.ts(18047)
// Property 'value' does not exist on type 'Element'.ts(2339)

// all that TypeScript know is that querySelector is going to return Element OR null
// but we know more about this Element

// we can provide a type (we can optionally add ! on the end to remove the null possibility)
const input2 = document.querySelector<HTMLInputElement>("#username");
console.log(input2);
// input2.value;
// 'input2' is possibly 'null'.ts(18047)
input2?.value;

// this was a long way to explain that querySelector is a GENERIC function that accepts SOME TYPE INSIDE

const button1 = document.querySelector<HTMLButtonElement>(".btn");
// when we hover over it button1: HTMLButtonElement | null;
console.log(button1);
button1?.innerText;

// so we are telling querySelector what type we want it to return
// we give it an input type <HTMLButtonElement>
// and it will return to us somehting of that type

// that is an example of a generic
// we can give it SOME type and then it will return an Element of that type
// and that is the relationship that is really important
// we give it some input type and we can expect some output type
// and we can CONTROL that return type by providing the input type <HTMLButtonElement> inside of angle brackets
// it's not an argument to the function itself
// we are not passing it into the querySelector( ) parentheses
// but you can think of it as a type argument setup in a way that is very GENERIC
