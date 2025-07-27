//Here goes the Login view.

export function showLoginView() {
  return `
  <main>
    <div class="login-card">
      <h2>Login</h2>

      <form class="lg-form" id="login-form">
        <input type="email" id="email" placeholder="Email" autocomplete="email" required>
        <input type="password" id="password" placeholder="Password" autocomplete="current-password" required>
        
        <button type="submit">Log in</button>
      </form>

      <p class="login-switch">
        Don't have an account? 
        <a href="/register" class="link" data-link >Register Here!</a>
      </p>
    </div>
  </main>
  `;
}
