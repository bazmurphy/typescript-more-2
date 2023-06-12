What type of object is `button`?

When we look at the `button` in the console in dev tools, the very last thing is

```
[[Prototype]]: HTMLButtonElement
```

So JavaScript knows the Prototype... But is that the Return Type? NO.

The Return Type is more complicated...

```
document.getElementById();
```

Will return to us an `HTMLElement` OR `null`, That is a Union Type

The type we get back is a generic `HTMLElement` type, not a Button type etc.

Because how does TypeScript know what the `getElementById` element is? All it knows is that it is some ID that hopefully exists.

But this id could be on an H1, a Form, an Image, etc..

So all it knows is that `getElementById` returns a generic HTML Element or it returns null.

If it doesn't find that element, TypeScript doesn't know is there something with that `id` that exists?

This is not runtime, this is beforehand... This is a VERY IMPORTANT CONCEPT

Where we are working with some value that may or may not exist
We either found an element or we did not

because if we try:

```
const buttonOne = document.getElementById("button-one");

buttonOne.addEventListener("click", () => {
  console.log("Clicked");
});
// 'buttonOne' is possibly 'null'.ts(18047)
```

The first solution is to use the JavaScript optional chaining operator

```
buttonOne?.addEventListener("click", () => {
  console.log("clicked");
});
```

the second solution is to use the TypeScript Non-Null Assertion Operator which is `!`

NOTE THE `!` at the end

this tells TypeScript that is guaranteed NOT to he `null`.

this is risker, but if we know FOR SURE that the element will exist and will be found or won't be `null`

```
const buttonOne = document.getElementById("button-one")!;
```

but this is not really advised because it is telling TypeScript to not worry if it is null or not.

And that is one of the point of TypeScript to worry
