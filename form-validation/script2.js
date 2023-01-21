let header = document.getElementById('seasonHeader');
let description = document.getElementById('seasonDescription');

document.addEventListener('click', selectSeason);

function selectSeason() {
    const seasonSelection = document.getElementById('seasonSelect');        
    if(seasonSelection.checked == true) {
        season = 'Summer'
        header.textContent = `${season} Programs`
        document.body.style.backgroundImage =  'url(images/summer2.jpg)'
        description.textContent = "Join a guided group to visit wildlife-rich northern Yellowstone searching for elk, bison, and other wildlife on the way to Yellowstone’s Grand Canyon and the Lower Falls of the Yellowstone River, Norris Geyser Basin, and the Mammoth Hot Spring Terraces."
    } else {
        season = 'Winter'
        header.textContent = `${season} Programs`
        document.body.style.backgroundImage = 'url(images/winter.jpg)'
        description.textContent = "The Winter Wolf Discovery program package focuses on exploring the world of wolves and other charismatic wildlife along Yellowstone’s grand Northern Range. Winter is prime time to view wolves in Yellowstone, and this package is designed to take advantage of this extraordinary opportunity. You will…"
    }
};

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const error = document.getElementById('error');

emailInput.addEventListener('input', (event) => {
    if (emailInput.validity.valid) {
    console.log('valid')
    error.innerText = ''
    return
    }
    console.log('invalid')
    error.innerText = 'Invalid'
});

const password = document.getElementById('password');
const confirmPwd = document.getElementById('confirmPwd');
const popUpMsg = document.getElementById('message');
popUpMsg.style.display = 'none';
password.onfocus = function() {
    
    popUpMsg.style.position = 'absolute'

    popUpMsg.style.display = 'inline-block';  
    
}
password.onblur = function() {
    popUpMsg.style.display = 'none';
}
confirmPwd.addEventListener('input', (event) => {

});


