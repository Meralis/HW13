const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const loginButton = document.querySelector('button');
const loadingSpinner = document.querySelector('.spinner');

loadingSpinner.style.display = 'none';

function validateLoginInput() {
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    loginButton.disabled = !email || !password;
}
validateLoginInput();

emailField.addEventListener('input', validateLoginInput);
passwordField.addEventListener('input', validateLoginInput);

loginButton.addEventListener('click', () => {
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    console.log(`email: ${email}, password: ${password}`);
    loadingSpinner.style.display = 'block';
    setTimeout(() => { location.href = 'myProfile.html' }, 2000);
});


