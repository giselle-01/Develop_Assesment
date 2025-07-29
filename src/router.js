
import { auth } from './js/auth';

import { showLoginView } from './views/login.js';
import { showRegisterView } from './views/register';
import { dashboardView  } from './views/dashboard';
import { notFound } from './views/404';

const routes = {
    "#/": showLoginView,
    "#/login": showLoginView,
    "#/register": showRegisterView,
    "#/dashboard": dashboardView,
    "#/404": notFound,
};

export function router() {
    const path = location.hash || '#/login';
    const user = auth.getUser();

    if (path.startsWith('#/dashboard') && !auth.isAuthenticated()) {
        location.hash = '#/login';
        return;
    }

    if ((path === '#/login' || path === '#/register') && auth.isAuthenticated()) {
        location.hash = '#/dashboard';
        return;
    }

    const view = routes[path];
    if (view) {
        view();
    } else {
        notFound();
    }
}