class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
  this._deleteBtnEl.addEventListener("click",  () => {
    this._handleDelete(this._completed);
    this._remove();
  });

this._todoCheckboxEl.addEventListener("change", () => {
  this._toggleCompletion();
  this._handleCheck(this._completed);
    });
  }

  getView() {
    this._todoElement = this._getTemplate();

    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoDateEl = this._todoElement.querySelector(".todo__date");
    this._deleteBtnEl = this._todoElement.querySelector(".todo__delete-btn");

    this._generateCheckboxEl();
    this._generateNameEl();
    this._generateDateEl();

    this._setEventListeners();

    return this._todoElement;
  }


_getTemplate() {
  return document.querySelector(this._selector).content.querySelector(".todo").cloneNode(true);
}

_generateNameEl() {
  this._nameEl.textContent = this._name;
}

_generateDateEl() {
const dueDate = new Date(this._date);
if (!isNaN(dueDate.getTime())) { 
  this._todoDateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short", 
    day: "numeric",
  })}`;
}
}

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.setAttribute("id", `todo-${this._id}`);
    todoLabel.setAttribute("for", `todo-${this._id}`);
  }

_toggleCompletion() {
  this._completed = !this._completed;
}

_remove = () => {
    this._todoElement.remove();
}
}

export default Todo;
