document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        if (rememberMe) {
            localStorage.setItem('loggedIn', 'true');
        }
        window.location.href = "welcome.html"; // Redirect to the welcome page
    } else {
        document.getElementById('error-message').style.display = "block";
    }
});
