const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input:first-child")
const welcomeContainer = document.querySelector("#welcome");
const welcome = document.querySelector("h1");
// const loginContainer = document.querySelector(".login");

const ON = "on";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(ON);
    // loginContainer.classList.add(ON);
    paintGreetings(username);
}

function paintGreetings(username) {
    welcome.innerText = `Hello ${username}!`;
    welcome.classList.remove(ON);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(ON);
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintGreetings(saveUsername);
}