import './js/api.js';
import './js/auth.js';
import { router } from './router.js';

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  if (window.location.hash === '') {
    window.location.hash = '#/404';
  }
});