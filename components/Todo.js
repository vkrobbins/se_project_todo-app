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
  this._handleCheck(!this._completed);
    });
  }

getView() {
  return this._todoElement;
}

_getTemplate() {
  return document.querySelector(this._selector).content.querySelector(".todo").cloneNode(true);
}

_generateNameEl() {
  this._nameEl = this._todoElement.querySelector(".todo__name");
  this._nameEl.textContent = this._data.name;
}

_generateDateEl() {
this._todoDateEl = this._todoElement.querySelector(".todo__date");
const dueDate = new Date(this._data.date);
if (!isNaN(dueDate.getTime())) { 
  this._todoDateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short", 
    day: "numeric",
  })}`;
}
}

_generateCheckboxEl() {
  this._checkboxEl = this._element.querySelector(".todo__completed");
  this._checkboxLabel = this._element.querySelector(".todo__checkbox-label");
  this._checkboxEl.checked = this.completed;
  this._checkboxLabel.setAttribute("for", `todo-${this._id}`);
}

_toggleCompletion() {
  this._completed = !this._completed;
}

_remove = () => {
    this._element.remove();
}
}

export default Todo;
