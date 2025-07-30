//This is where the Register view goes.

//Function exported with the HTML structure of the Register view.

export function showRegisterView() {
    document.getElementById('app').innerHTML = `
    <main>
        <!--Container for the register form--!>
        <div class="register-card">
            <h2>Register</h2>

            <!--Register form--!>
            <form id="register-form">
                <input type="text" id="name" placeholder="Full Name" autocomplete="Full name" required>
                <input type="email" id="email" placeholder="Email" autocomplete="email" required>
                <input type="password" id="password" placeholder="Password" autocomplete="new-password" required>
                <input type="password" id="confirm-password" placeholder="Confirm Password" autocomplete="new-password" required>
                <button type="submit" id="btn-register">Register</button>
            </form>

            <!--Message and link to switch to login page--!>
            <p class="register-switch">
                Already have an account? 
                <a href="#/login" class="link" data-link >Login Here!</a>
            </p>
        </div>
    </main>
    `;

    document.getElementById('register-form').onsubmit = async e => {
        e.preventDefault();

        try {
            await auth.register(e.target.name.value, e.target.email.value, e.target.password.value, e.target.confirmPassword.value);
            location.hash = '#/login';
            router();

        } catch (err) {
            alert(err.message);
        }
    };
    
}