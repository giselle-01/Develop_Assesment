//Here goes the Register view.

export function showRegisterView() {
    return `
    <main>
        <div class="register-card">
            <h2>Register</h2>

            <form id="register-form">
                <input type="text" id="name" placeholder="Full Name" autocomplete="Full name" required>
                <input type="email" id="email" placeholder="Email" autocomplete="email" required>
                <input type="password" id="password" placeholder="Password" autocomplete="new-password" required>
                <input type="password" id="confirm-password" placeholder="Confirm Password" autocomplete="new-password" required>
                <button type="submit" id="btn-register">Register</button>
            </form>

            <p class="register-switch">
                Already have an account? 
                <a href="/login" class="link" data-link >Login Here!</a>
            </p>
        </div>
    </main>
    `;
}