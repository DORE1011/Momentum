const todoForm = document.querySelector(".todo_form");
const todoInput = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");

const TODOES_KEY = "todos";

let toDos = [];

function saveToDoes(){
    localStorage.setItem(TODOES_KEY, JSON.stringify(toDos));
}

function deleteToDo(a){
    const li = a.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDoes();
}


function paintToDo(a){
    const li = document.createElement("li");
    li.id = a.id;
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const finishButton = document.createElement("input");

    deleteButton.innerText = "x";
    deleteButton.addEventListener("click",deleteToDo);

    finishButton.type = "checkbox";

    li.appendChild(finishButton);
    li.appendChild(span);
    li.appendChild(deleteButton);

    span.innerText = a.text;

    todoList.appendChild(li);
}

function todoSubmit(a){
    a.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    // console.log(newTodo);
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDoes();
}

const savedToDoes = localStorage.getItem(TODOES_KEY);

if(savedToDoes !== null){
    const parsedToDos = JSON.parse(savedToDoes);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
};

todoForm.addEventListener("submit", todoSubmit);