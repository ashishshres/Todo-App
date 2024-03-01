let addButton = document.querySelector("button");
let task = document.querySelector("input");
let todos = document.querySelector("ul");

function addTodo() {
    if (task.value == "") {
        alert("Enter valid todo!");
    }
    else {
        let taskList = document.createElement("li");
        let markTask = document.createElement("button");
        let removeTask = document.createElement("button");
        markTask.classList.add("mark");
        removeTask.classList.add("remove");
        markTask.innerText = "Mark done";
        removeTask.innerText = "Remove";
        taskList.innerText = task.value;
        todos.appendChild(taskList);
        taskList.appendChild(markTask);
        taskList.appendChild(removeTask);
        task.value = "";
    }
}

function removeTodo(e) {
    let todo = e.target.parentElement;

    if (e.target.className == "remove") {
        todo.remove();
    }
    else if (e.target.className == "mark") {
        todo.style.textDecoration = "line-through";
    }
}

addButton.addEventListener("click", addTodo);
todos.addEventListener("click", removeTodo);