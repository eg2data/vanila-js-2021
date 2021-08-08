const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string을 저장하고자 하는 변수는 대분자+snake convention. 오타방지
const USERNAME_KEY = "name" // 단순 오타는 오류메시지 없지만, 변수명 오타는 js가 지적 해주니까.


function handleLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

function paintGreeting() {
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    paintGreeting();
}