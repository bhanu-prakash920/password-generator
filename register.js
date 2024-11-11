document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = "login.html";
    } else {
        document.getElementById('error-message').style.display = "block";
    }
});
