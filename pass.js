function updateLengthDisplay() {
    const length = document.getElementById('length').value;
    document.getElementById('lengthDisplay').textContent = length;
}

function generatePassword() {
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const specialChars = document.getElementById('specialChars').checked;
    const excludeDuplicates = document.getElementById('excludeDuplicates').checked;
    const length = parseInt(document.getElementById('length').value);

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialCharacters = '@#$%^&*()_+{}[]|;:<>,.?';

    let allChars = '';
    if (uppercase) allChars += upperCaseChars;
    if (lowercase) allChars += lowerCaseChars;
    if (numbers) allChars += numberChars;
    if (specialChars) allChars += specialCharacters;

    if (allChars === '') {
        document.getElementById('passwordOutput').value = 'Select at least one option';
        return;
    }

    let password = '';
    const usedChars = new Set();
    while (password.length < length) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        if (excludeDuplicates && usedChars.has(randomChar)) continue;
        password += randomChar;
        usedChars.add(randomChar);
    }

    document.getElementById('passwordOutput').value = password;
}

function copyToClipboard() {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
