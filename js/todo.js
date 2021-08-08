const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input") OK!
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = []; // 새로고침하면 reset되는 것을 막기 위해 여기를 const=>let 해주고, 맨 아래에서 toDos = parsedToDos; 해줌

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //// 왜.. 시켰더라..?
}

function deleteToDo(event) {
    // console.log("check"); // console.log로 계속해서 작동여부 checking
    // console.log(event.target.parentElement); 확인 후 변수 생성. 아래와 같이.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo); // 이렇게도 넣을 수 있구나. 맨 아래에 빼는 것이 아니고!
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    // console.log(newTodo, toDoInput.value); // newTodo에 담았기 때문에, 아래에서 "";해도 문제가 없지.
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) { // null이 아니라면! 이라는 의미란다 이 자체로. 즉, savedToDos !== null 과 같다. 오.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}