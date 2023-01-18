//create functions add subtract multiply divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let buttons = document.querySelectorAll('button')
let operatorBtns = document.querySelectorAll('.operator')
let numberBtns = document.querySelectorAll('.number')
let equalBtn = document.querySelector('#equal')
//operator buttons
const operator = operatorBtns.textContent;

function displayButtonClicked(event){       
    const input = document.getElementById('input');    
    input.value.split('=')
    input.value += event.target.textContent;
}


   
equalBtn.addEventListener('click', () => {       
    let stringEqation = input.value;
    const problem = stringEqation.split(/[\+\-\*\/]/)
    let a = Number(problem[0])
    let b = Number(problem[1])
    console.log(a)
    console.log(b)
    /// \d/g, '' removes numbers from string
    let operator = stringEqation.replace(/\d/g, '')
    console.log(operator)
    if(operator === '+'){
        result = add(a, b)
    }
    if(operator === '-'){
        result = subtract(a, b)
    }        
    if(operator === '*'){
        result = multiply(a, b)
    }
    if(operator === '/'){
        if (b === 0) result = null
        else result = divide(a, b)
    }
    let equation = input.value;
console.log(equation)
    equation += `${input.value} = ${result}`
    input.value += " ";
    input.value += result;
})



buttons.forEach(button =>{
    button.addEventListener('click', displayButtonClicked)
})


