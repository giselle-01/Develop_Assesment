import { router } from "./router";

window.addEventListener('popstate', router);
window.addEventListener('load', router);

router();