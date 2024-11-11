document.getElementById('generate-btn').addEventListener('click', function() {
    const passwordLength = parseInt(document.getElementById('password-length').value);
    const includeUpper = document.getElementById('include-upper').checked;
    const includeLower = document.getElementById('include-lower').checked;
    const includeNum = document.getElementById('include-num').checked;
    const includeSym = document.getElementById('include-sym').checked;
    const password = generatePassword(passwordLength, includeUpper, includeLower, includeNum, includeSym);
    document.getElementById('password').value = password;
});

function generatePassword(length, upper, lower, numbers, symbols) {
    let pool = '';
    if (upper) pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) pool += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) pool += '1234567890';
    if (symbols) pool += '!@#$%^&*()-_=+\\/~?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        password += pool.charAt(randomIndex);
    }
    return password;
}
