const form = document.querySelector('form')
const fullNameInput = document.getElementById('full_name')
const emailInput = document.getElementById('email')
const emailError = document.querySelector('#email + span.error')
const phoneInput = document.getElementById('phone')
const commentInput = document.getElementById('comment')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')


email.addEventListener('email', (event) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error'
    } else {
        showError(0)
    }
});
form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});
function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Enter email address';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email!'
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`
    }
    emailError.className = 'error active';
}