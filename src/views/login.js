//This is where the Login view goes.

//Function exported with the HTML structure of the Login view.
export function showLoginView() {
  return `
  <main>
    <!--Container for the login form--!>
    <div class="login-card">
      <h2>Login</h2>

      <!--Login form--!>
      <form class="lg-form" id="login-form">
        <input type="email" id="email" placeholder="Email" autocomplete="email" required>
        <input type="password" id="password" placeholder="Password" autocomplete="current-password" required>
        <button type="submit">Log in</button>
      </form>

      <!--Message and link to switch to register page--!>
      <p class="login-switch">
        Don't have an account? 
        <a href="/register" class="link" id="register-link" data-link >Register Here!</a>
      </p>
    </div>
  </main>
  `;
}
