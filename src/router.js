//Here goes the Router configuration.


import { showLoginView } from "./views/login.js";
import { showRegisterView } from "./views/register.js";
import { showAdminView } from "./views/dashboardAdmin.js";

import { interactiveLogin } from "./js/interactiveLogin.js";

const routes = {
    "/": {
        showView: showLoginView(),
        afterRender: interactiveLogin(),
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
    "/dashboardAdmin": {
        showView: showAdminView(),
        afterRender:"settingsDashboardAdmin",
        private: false
    }
}

export async function router() {
  const app = document.getElementById("app");

  //Take pathname and see if it has a route
  const path = window.location.pathname;
  const route = routes[path] || routes["/404"];

  try {
    //Take html
    const file = await fetch(route.path);

    //Load html in document
    app.innerHTML = content;

    //Load component JS
    if (route.setup) {
      route.setup();
    }
  } catch (error) {
    redirectTo("/notFound");
  }
}

export function redirectTo(path) {
  window.history.pushState({}, "", `${path}`);
  return router();
}