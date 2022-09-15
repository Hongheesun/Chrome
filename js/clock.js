const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//여기서 getClock()을 실행시켜 주는 이유는
//맨 처음에는 1초뒤가 아닌 바로 실행하고 싶기 때문
getClock();
//1초마다 한번씩 실행
setInterval(getClock, 1000);
