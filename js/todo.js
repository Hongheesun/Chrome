const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//위와 같은 것const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

//JSON.strinfy()는 전체적인 코드를 string으로 변경해주는 함수
// 이것을 parse해줘야함 -> 마지막 확인
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //여러가지 li 'X' 버튼 중 어떤 'X' 버튼이 눌렸는지 확인하기 위해
  //클린 된 element뿐 아니라 부모 노드도 알아야한다!
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  //li태그 안에 span을 넣고 싶을 때

  li.appendChild(span);
  li.appendChild(button);
  //만든 li를 ul안에 넣기 위해서

  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
