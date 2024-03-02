// Getting elements
const todoForm = document.querySelector(".todo-form");
const add = document.querySelector(".add");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const invalid = document.querySelector(".invalid-todo");

// Prevents page reload when submitting
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

function createTodoComponent() {
  const todoText = todoInput.value;
  const todoComponent = `
    <p class="todo-text">${todoText}</p>    
    <div class="todo-btns">
      <button class="btn mark">Mark</button>
      <button class="btn remove">Remove</button>
    </div>
  `;

  const todo = document.createElement("li");
  todo.classList.add("todo");
  todo.innerHTML = todoComponent;

  todoList.appendChild(todo);

  todoInput.value = "";
}

function addTodo() {
  if (todoInput.value !== "") {
    validTodo();
    createTodoComponent();
  } else {
    invalidTodo();
  }
}

function handleTodoBtns(event) {
  const btn = event.target;
  const todo = btn.parentElement.parentElement;
  const todoText = todo.querySelector(".todo-text");

  if (btn.className === "btn remove") {
    removeTodo(todo);
  } else if (btn.className === "btn mark") {
    markTodo(btn, todoText);
  } else if (btn.className === "btn unmark") {
    unmarkTodo(btn, todoText);
  }
}

function removeTodo(todo) {
  todo.remove();
}

function markTodo(btn, todoText) {
  todoText.style.textDecoration = "line-through";
  btn.innerText = "Unmark";
  btn.classList.remove("mark");
  btn.classList.add("unmark");
}

function unmarkTodo(btn, todoText) {
  todoText.style.textDecoration = "none";
  btn.innerText = "Mark";
  btn.classList.remove("unmark");
  btn.classList.add("mark");
}

function validTodo() {
  invalid.classList.add("hidden");
  invalid.classList.remove("visible");
}

function invalidTodo() {
  invalid.classList.add("visible");
  invalid.classList.remove("hidden");
}

add.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoBtns);
