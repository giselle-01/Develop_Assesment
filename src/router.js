//Here goes the Router configuration.
import { showLoginView } from "./views/login.js";
import { showRegisterView } from "./views/register.js";

const routes = {
    "/": {
        showView: showLoginView(),
        afterRender: "settingsLogin",
        private: false
    },
    "/login":{
        showView: showLoginView(),
        afterRender: "settingsLogin",
        private: false
    },
    "/register": {
        showView: showRegisterView(),
        afterRender: "settingsRegister",
        private: false
    },
}

export function router () {
    const path = window.location.pathname || "/";
    const app = document.getElementById("app");
    const currentRoute = routes[path];

    if (currentRoute) {
        app.innerHTML = currentRoute.showView;

        if (typeof currentRoute.afterRender === "function") {
            currentRoute.afterRender();
        }
    }

}