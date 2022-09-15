//자바스크립트에서 변수명은 주로 카멜케이스 ex) myName = "sunny"
//undefined는 데이터 공간을 만들고 안에 값이 들어가있지 않은 것
//null은 undefined와 달리 자연적으로 생기지 않음!
//객체 player.name || player["name"]

const loginForm = document.querySelector("#login-form");
//가져오는 첫 번째 방법
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//두 번째 방법
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

//여기서는 대문자를 쓰는 이유는?
//관습같은 것 - 일반적으로 string만 포함된 변수는 대문자로 표기
//string을 저장하고 싶을 때 사용
//loginFrom이나 loginInput처럼 중요한 정보를 담은게 아니라 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
//사용자가 input으로 입력한 값을 가져오려면 value로 가져와야함
function onLoginSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  //로컬 db에 저장해서 새로고침해도 이름을 기억할 수 있게
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //greeting.innerText = "Hello " + userName;
  //니꼬쌤은 아래 방식이 더 선호
  // greeting.innerText = `Hello ${userName}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(userName);
  console.log(userName);
}
function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
//loginButton.addEventListener("click", onLoginBtnClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greeting.innerText = `Hello ${savedUserName}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUserName);
}
