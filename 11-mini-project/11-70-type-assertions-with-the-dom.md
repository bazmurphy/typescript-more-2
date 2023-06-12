# Type Assertion With The DOM

```
const buttonOne = document.getElementById("button-one");

const todoInput = document.getElementById("todo-input");

buttonOne?.addEventListener("click", () => {
  todoInput?.value;
});
// Property 'value' does not exist on type 'HTMLElement'.ts(2339)
```

because .value exists on a `HTMLInputElement`

so we need to tell TypeScript that it is not just any `HTMLElement` it is an `HTMLInputElement`

if we look on the types

`interface HTMLInputElement extends HTMLElement {`

it includes

`value: string;`

TypeScript cannot know what element we pass into the `getElementById()` and it cannot look at the HTML

So we CAST IT `as` an `HTMLInputElement`

`const todoInput = document.getElementById("todo-input") as HTMLInputElement;`

```
buttonOne?.addEventListener("click", () => {
  console.log(todoInput?.value);
  todoInput.value = "";
});
```

We needed to use a Type Assertion to tell TypeScript what specific Element this was

We could also be more specific for the button:

`const buttonOne = document.getElementById("button-one") as HTMLButtonElement;`

There is an ALTERNATE Syntax for Type Assertions using `< >`

`const todoInput = document.getElementById("todo-input");`

`(<HTMLInputElement>todoInput).value;`
