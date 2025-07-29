
import { redirectTo } from "../router";
import { showLoginView } from "../views/login.js";

export function interactiveLogin () {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const registerLink = document.getElementById('register-link');

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        showLoginView(emailInput.value.trim(), passwordInput.value);
    });

    registerLink.addEventListener("click", (event) => {
        event.preventDefault();
        redirectTo("/register");
    });
}