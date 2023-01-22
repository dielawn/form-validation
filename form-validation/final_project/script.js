//inputs
const password = document.getElementById('password');
const confirmPwd = document.getElementById('confirmPwd');
//divs with text elements
const passwordMsg = document.getElementById('passwordMsg');
const matchMsg = document.getElementById('matchStatus');

const submitBtn = document.getElementById('submit');

passwordMsg.style.display = 'none';
password.onfocus = function() {
    passwordMsg.style.position = 'relative'
    passwordMsg.style.display = 'inline-block';       
}
password.onblur = function() {
    passwordMsg.style.display = 'none';
}
const specialCharacter = document.getElementById('special');
const lowerCase = document.getElementById('letter');
const upperCase = document.getElementById('capital');
const numberReq = document.getElementById('number');
const minLength = document.getElementById('length');

password.addEventListener('input', (event) => {
    checkRequired();
    console.log(password.value)
});

function checkRequired() {
    minLength.style.color = 'red'
    if(password.value.length >= 8){
        minLength.style.color = 'green'
    } 
    const numbers = /[0-9]/g;
    numberReq.style.color = 'red'
    if (password.value.match(numbers)){
        numberReq.style.color = 'green'
    }
    const capitalLetters = /[A-Z]/g;
    upperCase.style.color = 'red'
    if(password.value.match(capitalLetters)) {
        upperCase.style.color = 'green'
    }
    const letters = /[a-z]/g;
    lowerCase.style.color = 'red'
    if (password.value.match(letters)){
        lowerCase.style.color = 'green'
    }
    const characters = /[!@#$%^&*]/;
    specialCharacter.style.color = 'red'
    if (password.value.match(characters)) {
        specialCharacter.style.color = 'green'
    }
}

matchMsg.style.display = 'none';
confirmPwd.onfocus = function () {
    matchMsg.style.position = 'relative'
    matchMsg.style.display = 'inline-block'
    matchMsg.innerText = 'No Match'
    matchMsg.style.color = 'red'
}
confirmPwd.onblur = function () {
    matchMsg.style.display = 'none'
}

confirmPwd.addEventListener('input', (event) => {
    matchPassword()
});
submitBtn.disabled = true;
function matchPassword() {    
    if(password.value == confirmPwd.value && password.value != ''){
        submitBtn.disabled = false;
        console.log(`Password =${password.value} Confirm = ${confirmPwd.value}`)
        matchMsg.innerText = 'Match'
        matchMsg.style.color = 'green'
    }
    if(password.value != confirmPwd.value){
        submitBtn.disabled = true;
        console.log('no match')
        matchMsg.innerText = 'No Match'
        matchMsg.style.color = 'red'
    }

}

//email validation
//input
const email = document.getElementById('email')

//text element
const emailMsg = document.getElementById('validEmail');

email.onfocus = function() {    
    emailMsg.style.position = 'relative'
    emailMsg.style.display = 'inline-block';     
}

email.onblur = function() {
    emailMsg.style.display = 'none';
}

email.addEventListener('input', (event) => {
   checkEmail()    
});

function checkEmail() {
    emailMsg
    if (email.validity.valid) {
    console.log('valid')    
   
    emailMsg.textContent = '';   
    return
    }
    emailMsg.innerText = "Requires '@' "
    emailMsg.style.color = 'red'
    emailMsg.style.position = 'relative'
    emailMsg.style.display = 'inline-block'    
   
}