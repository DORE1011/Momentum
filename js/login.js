const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input:first-child")
const welcomeContainer = document.querySelector("#welcome");
const welcome = document.querySelector("#welcome h1");

const ON = "on";
const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(ON);
    paintGreetings(username);
}

function paintGreetings(username) {
    welcome.innerText = `Hello ${username}!`;
    welcome.classList.remove(ON);
    welcomeContainer.classList.add(HIDDEN);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(ON);
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintGreetings(saveUsername);
}