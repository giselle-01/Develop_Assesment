//Here goes the Login view.

export function showLoginView() {
  return `
  <main>
    <div class="container-register">
      <h2>Login</h2>

      <form id="login-form">
        <input type="email" id="email" placeholder="Email" autocomplete="email" required>
        <input type="password" id="password" placeholder="Password" autocomplete="current-password" required>
        <button type="submit">Log in</button>
      </form>

      <p class="login-switch">
        Don't have an account? 
        <a href="#" id="register-link" data-link>Register</a>
      </p>
    </div>
  </main>
  `;
}
