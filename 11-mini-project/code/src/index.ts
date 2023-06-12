// function printDouble(msg: string) {
//   console.log(msg);
//   console.log(msg);
// }

// printDouble("Hello World :)");

// what is the type of this button element?
// what is this type of the document?

// if we were trying to describe this document in TypeScript it is a very complex object
// const button = document.querySelector("button");

// if we have a button and try to do
// button.addEventListener();

// TypeScript has to know that we CAN call that Method
// TypeScript has to know what the button is, and what it can and can't do

// if we hover over "document" it says is of type ": Document"
// we can right click on "document" and click "Go To Type Definition"
// and we can see:

// interface Document extends Node, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase {
// and inside it there is:
// URL: string
// which is a property on the document object

// etc etc..

// but TypeScript has libraries by default one of which called "DOM" which has a file providing Type Declarations
// "dom.generated.d.ts"

// const button = document.getElementById("button-one");
// console.log(button);

// The major point is, TypeScript has all of these types built in, it knows about the document, it knows about its properties and methods,
// because it imports the Type Declarations from that file

// Type Definitions Libraries that are imported using "lib" ["DON", "ES2021"] or by setting "target"
// ES2021 String method .replaceAll()
// "hello".replaceAll("l", "!");

// ----- Non Null Assertion Operator

// console.dir(button);
// When we look at the button in the console in dev tools, the very last thing is
// [[Prototype]]: HTMLButtonElement

// So JavaScript knows the Prototype... But is that the Return Type? NO.

// The Return Type is more complicated

// document.getElementById("button-one");
// will return to us an HTMLElement or null
// it is a Union Type

// its a generic HTMLElement type, not a Button type etc.

// Because how does TypeScript know what the getElementById element is? It could be an H1, a Form, an Image, etc..

// And also it could either find that element or not

// const buttonOne = document.getElementById("button-one");

// because if we try:
// buttonOne.addEventListener("click", () => {
//   console.log("Clicked");
// });
// 'buttonOne' is possibly 'null'.ts(18047)

// The first approach to this is to use the JavaScript optional chaining operator

// buttonOne?.addEventListener("click", () => {
//   console.log("clicked");
// });

// the second approach to this is to use the TypeScript  Non-Null Assertion Operator which is !
// NOTE THE ! at the end
// this tells TypeScript that is guaranteed NOT to he Null.
// this is risker, but if we know FOR SURE that the element will exist and will be found or won't be null

// const buttonOne = document.getElementById("button-one")!;

// but this is not really advised because it is telling TypeScript to not worry if it is null or not.
// And that is one of the point of TypeScript to worry

// let mystery1 = "Hello World!";
// TypeScript knows this is a string

// But if we override this behaviour
// let mystery2: unknown = "Hello World!";

// const numberOfCharacters = mystery2.length;
// 'mystery2' is of type 'unknown'.ts(18046)

// when we know it WILL be a String, we can override this error using the Type Assertion syntax

// const numberOfCharacters2 = (mystery2 as string).length;
// this variable is equal to the mystery2 variable OF type string

// this does NOT CHANGE the type of mystery2
// it is STILL unknown, but in this one context, we specified that this is treated as a string

// but what if it wasn't a string? but a number?

// let mystery3: unknown = 4;

// const numberOfCharacters3 = (mystery3 as string).length;

// there is no error(!) because we are treating it as a string, and that is all it knows,
// it is NOT executing our code, this is PRE-RUNTIME.

// This example is contrived, but this is the concept of an Assertion we tell TypeScript I know more than you, treat this as string right here.

// ---- Type Assertions with the DOM

// const buttonOne = document.getElementById("button-one");

// const todoInput = document.getElementById("todo-input");

// buttonOne?.addEventListener("click", () => {
// todoInput?.value;
// Property 'value' does not exist on type 'HTMLElement'.ts(2339)
// because .value exists on a HTMLInputElement
// so we need to tell TypeScript that it is not just any HTMLElement it is an HTMLInputElement
// });

// if we look on the types
// interface HTMLInputElement extends HTMLElement {
// it includes
// value: string;

// TypeScript cannot know what element we pass into the getElementById and it cannot look at the HTML

// So we CAST IT as an HTMLInputElement

// const todoInput = document.getElementById("todo-input") as HTMLInputElement;

// buttonOne?.addEventListener("click", () => {
//   console.log(todoInput?.value);
//   todoInput.value = "";
// });

// We needed to use a Type Assertion to tell TypeScript what specific Element this was

// We could also be more specific for the button:

// const buttonOne = document.getElementById("button-one") as HTMLButtonElement;

// There is an ALTERNATE Syntax for Type Assertions using < >

// const todoInput = document.getElementById("todo-input");

// (<HTMLInputElement>todoInput).value;

// ----- Working with Events

// const todoInput = document.getElementById("todo-input") as HTMLButtonElement;
// const buttonOne = document.getElementById("todo-button") as HTMLInputElement;
// const todoForm = document.getElementById("todo-form") as HTMLFormElement;

// if we use the element name then TypeScript knows its a HTMLFormElement
// const form = document.querySelector("form");

// How does TypeScript automatically know event is a SubmitEvent?
// It looks at the context, it knows an addEventListener method
// It knows the form is an HTMLFormElement
// and so it knows the event is a submitEvent type
// and it knows submitEvent's have a preventDefault method
// todoForm?.addEventListener("submit", (event) => {
//   event?.preventDefault();
//   console.log("typescript knows what even is in the same context");
// });

// but this ONLY WORKS in this CONTEXT
// if we move it into a separate context (function)

// function handleSubmit1(event) {
//   // Parameter 'event' implicitly has an 'any' type.ts(7006)
//   event.preventDefault();
//   console.log(
//     "typescript doesn't know what event is in two different contexts"
//   );
// }

// todoForm?.addEventListener("submit", handleSubmit1);

// so we needs to give the event a SubmitEvent type
// function handleSubmit2(event: SubmitEvent) {
//   // Parameter 'event' implicitly has an 'any' type.ts(7006)
//   event.preventDefault();
//   console.log("we annotate 'event' to say it is a SubmitEvent type");
// }

// todoForm?.addEventListener("submit", handleSubmit2);

// const todoList = document.getElementById("todo-list");

// todoForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event: SubmitEvent) {
//   event.preventDefault();
//   const newTodoText = document.createElement("span");
//   newTodoText.innerText = todoInput.value;
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   const newLi = document.createElement("li");
//   newLi.append(newTodoText);
//   newLi.append(checkbox);
//   todoList?.append(newLi);
//   todoInput.value = "";
// }

// ----- Adding in an Interface

// We need to improve this by making a Data Structure, and save them to Local Storage in the Browser.

// // we define an interface
// interface Todo {
//   text: string;
//   completed: boolean;
// }

// // this todos variable is an array of type Todo
// const todosArray: Todo[] = [];

// const todoInput = document.getElementById("todo-input") as HTMLButtonElement;
// const buttonOne = document.getElementById("todo-button") as HTMLInputElement;
// const todoForm = document.getElementById("todo-form") as HTMLFormElement;
// const todoList = document.getElementById("todo-list");

// todoForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event: SubmitEvent) {
//   event.preventDefault();

//   // make a newTodo object of type Todo
//   const newTodo: Todo = {
//     text: todoInput.value,
//     completed: false,
//   };

//   // render the todo to the DOM
//   createTodoOnPage(newTodo);

//   // push the newTodo object to the todos array
//   todosArray.push(newTodo);

//   // reset the input text box to empty
//   todoInput.value = "";
// }

// function createTodoOnPage(todo: Todo) {
//   // create a span and populate it with the text key of the todo object passed as an argument
//   const newTodoText = document.createElement("span");
//   newTodoText.innerText = todo.text;
//   // create an input checkbox
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";

//   const newLi = document.createElement("li");
//   newLi.append(newTodoText);
//   newLi.append(checkbox);

//   todoList?.append(newLi);
// }

// ----- Connecting to LocalStorage

// // we define an interface
// interface Todo {
//   text: string;
//   completed: boolean;
// }

// const todoInput = document.getElementById("todo-input") as HTMLButtonElement;
// const buttonOne = document.getElementById("todo-button") as HTMLInputElement;
// const todoForm = document.getElementById("todo-form") as HTMLFormElement;
// const todoList = document.getElementById("todo-list");

// // this todos variable is an array of type Todo
// // and we call the function to read todos from local storage
// // and set it to either an empty array if none exist or to an array of todos
// const todosArray: Todo[] = readTodosFromLocalStorage();

// // now we iterate through the todosArray and render them to the DOM
// todosArray.forEach(createTodoOnPage);

// todoForm.addEventListener("submit", handleSubmit);

// // use the interface here, to state that this function returns an array of type Todo
// function readTodosFromLocalStorage(): Todo[] {
//   const todosJSON = localStorage.getItem("todos");
//   // we need to handle the null case where there is no "todos" in the localStorage
//   if (todosJSON === null) {
//     return [];
//   }
//   // so now this must be a string
//   return JSON.parse(todosJSON);
// }

// function handleSubmit(event: SubmitEvent) {
//   event.preventDefault();

//   // make a newTodo object of type Todo
//   const newTodo: Todo = {
//     text: todoInput.value,
//     completed: false,
//   };
//   // render the todo to the DOM
//   createTodoOnPage(newTodo);

//   // push the newTodo object to the todos array
//   todosArray.push(newTodo);

//   localStorage.setItem("todos", JSON.stringify(todosArray));

//   // reset the input text box to empty
//   todoInput.value = "";
// }

// function createTodoOnPage(todo: Todo) {
//   // create a span and populate it with the text key of the todo object passed as an argument
//   const newTodoText = document.createElement("span");
//   newTodoText.innerText = todo.text;

//   // create an input checkbox
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";

//   // create a new li and populate it with the two above
//   const newLi = document.createElement("li");
//   newLi.append(newTodoText);
//   newLi.append(checkbox);

//   // append it to the todoList
//   todoList?.append(newLi);
// }

// ----- Todo List Finishing Touches

// we define an interface
interface Todo {
  text: string;
  completed: boolean;
  createdAt: Date;
}

const todoInput = document.getElementById("todo-input") as HTMLButtonElement;
const buttonOne = document.getElementById("todo-button") as HTMLInputElement;
const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

// this todos variable is an array of type Todo
// and we call the function to read todos from local storage
// and set it to either an empty array if none exist or to an array of todos
const todosArray: Todo[] = readTodosFromLocalStorage();

// now we iterate through the todosArray and render them to the DOM
todosArray.forEach(createTodoOnPage);

todoForm.addEventListener("submit", handleSubmit);

// use the interface here, to state that this function returns an array of type Todo
function readTodosFromLocalStorage(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  // we need to handle the null case where there is no "todos" in the localStorage
  if (todosJSON === null) {
    return [];
  }
  console.log(todosJSON);
  // so now this must be a string
  const todosParsed = JSON.parse(todosJSON);
  console.log(todosParsed);
  return todosParsed;
}

function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function reRenderAllTodosToPage() {
  // remove all todos from the list
  todoList.innerHTML = "";
  // re-render all todos in the list
  todosArray.forEach(createTodoOnPage);
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  // make a newTodo object of type Todo
  const newTodo: Todo = {
    text: todoInput.value,
    completed: false,
    createdAt: new Date(),
  };
  // render the todo to the DOM
  createTodoOnPage(newTodo);

  // push the newTodo object to the todos array
  todosArray.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todosArray));

  // reset the input text box to empty
  todoInput.value = "";
}

function createTodoOnPage(todo: Todo) {
  // create a span and populate it with the text key of the todo object passed as an argument
  const newTodoText = document.createElement("span");
  newTodoText.innerText = todo.text;

  const newTodoCreatedAt = document.createElement("span");
  newTodoCreatedAt.innerText = jsonStringDateConversion(
    todo.createdAt.toString()
  );

  // create an input checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  // set the checked state based on the todosArray
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    // here we update the completed key/value on the newTodo Object that is passed as an argument
    todo.completed = checkbox.checked;
    // and then update the localStorage
    saveTodosToLocalStorage();
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "🗑️";
  deleteButton.addEventListener("click", () => {
    // find the index of the todo that needs deleting
    const indexOfTodoToDelete = todosArray.findIndex(
      (element) => element.text === todo.text
    );
    // remove that particular todo from the todosArray
    todosArray.splice(indexOfTodoToDelete, 1);
    // update the localStorage to reflect that
    saveTodosToLocalStorage();
    // re-render all the todos
    reRenderAllTodosToPage();
  });

  // create a new li and populate it with the two above
  const newLi = document.createElement("li");
  newLi.append(newTodoText);
  newLi.append(newTodoCreatedAt);
  newLi.append(checkbox);
  newLi.append(deleteButton);

  // append it to the todoList
  todoList?.append(newLi);
}

function jsonStringDateConversion(stringDate: string) {
  const date = new Date(stringDate);
  console.log("jsonStringDateToDate date:", date);
  return date.toLocaleString();
}
