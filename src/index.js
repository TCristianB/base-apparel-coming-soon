const button = document.getElementById('button');
const inputEmail = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const formErrorMessage = document.querySelector('.form__error-message');

button.addEventListener('click', function(e) {
    e.preventDefault();
    if(!validateEmail(inputEmail.value)) {
        errorIcon.classList.add('visible');
        formErrorMessage.classList.add('visible');
        inputEmail.value = ""
    } else {
        errorIcon.classList.remove('visible');
        formErrorMessage.classList.remove('visible');
    };
    console.log(validateEmail(inputEmail.value));
    
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};