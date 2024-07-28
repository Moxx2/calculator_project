function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNum = '';
let operator = '';
let secondNum = '';

function operate(firstNum, operator, secondNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
        break;
        case '-':
            return subtract(firstNum, secondNum);
        break;
        case '*':
            return multiply(firstNum, secondNum);
        break;
        case '/':
            return divide(firstNum, secondNum);
        break;
    };
};

const display = document.querySelector('.display');
let displayValue = '';
const numberList = document.querySelectorAll('.digit');
const numbers = [...numberList];
numbers[0].addEventListener('click', function() {
    displayValue = displayValue + '1';
    display.textContent = displayValue;
});
numbers[1].addEventListener('click', function() {
    displayValue = displayValue + '2';
    display.textContent = displayValue;
});