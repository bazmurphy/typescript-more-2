"use strict";
// function printDouble(msg: string) {
//   console.log(msg);
//   console.log(msg);
// }
const todoInput = document.getElementById("todo-input");
const buttonOne = document.getElementById("todo-button");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
// this todos variable is an array of type Todo
// and we call the function to read todos from local storage
// and set it to either an empty array if none exist or to an array of todos
const todosArray = readTodosFromLocalStorage();
// now we iterate through the todosArray and render them to the DOM
todosArray.forEach(createTodoOnPage);
todoForm.addEventListener("submit", handleSubmit);
// use the interface here, to state that this function returns an array of type Todo
function readTodosFromLocalStorage() {
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
function handleSubmit(event) {
    event.preventDefault();
    // make a newTodo object of type Todo
    const newTodo = {
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
function createTodoOnPage(todo) {
    // create a span and populate it with the text key of the todo object passed as an argument
    const newTodoText = document.createElement("span");
    newTodoText.innerText = todo.text;
    const newTodoCreatedAt = document.createElement("span");
    newTodoCreatedAt.innerText = jsonStringDateConversion(todo.createdAt.toString());
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
        const indexOfTodoToDelete = todosArray.findIndex((element) => element.text === todo.text);
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
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newLi);
}
function jsonStringDateConversion(stringDate) {
    const date = new Date(stringDate);
    console.log("jsonStringDateToDate date:", date);
    return date.toLocaleString();
}
