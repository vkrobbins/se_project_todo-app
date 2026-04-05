import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";


const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({ popupSelector: "#add-todo-popup", 
  handleFormSubmit: (_inputValues) => {}, 
});


const section = new Section({
  items: [initialTodos],
  renderer: (item) => {
    const todo = generateTodo(item);
    todosList.append(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems();


function  _handleEscClose(evt) {
  if (evt.key === "Escape") {
    addTodoPopup.close();
  }
}
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false); 
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});


initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});

const addTodoFormValidator = new FormValidator(validationConfig, addTodoForm); 
addTodoFormValidator.enableValidation();