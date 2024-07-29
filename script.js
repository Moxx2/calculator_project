function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return Number(a) - Number(b);
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
        case '÷':
            return divide(firstNum, secondNum);
        break;
    };
};

const display = document.querySelector('.display');
let displayValue = '';
const clearBtn = document.querySelector('#clear_btn');
clearBtn.addEventListener('click', function() {
    displayValue = '';
    display.textContent = displayValue;
});

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
numbers[2].addEventListener('click', function() {
    displayValue = displayValue + '3';
    display.textContent = displayValue;
});
numbers[3].addEventListener('click', function() {
    displayValue = displayValue + '4';
    display.textContent = displayValue;
});
numbers[4].addEventListener('click', function() {
    displayValue = displayValue + '5';
    display.textContent = displayValue;
});
numbers[5].addEventListener('click', function() {
    displayValue = displayValue + '6';
    display.textContent = displayValue;
});
numbers[6].addEventListener('click', function() {
    displayValue = displayValue + '7';
    display.textContent = displayValue;
});
numbers[7].addEventListener('click', function() {
    displayValue = displayValue + '8';
    display.textContent = displayValue;
});
numbers[8].addEventListener('click', function() {
    displayValue = displayValue + '9';
    display.textContent = displayValue;
});
numbers[9].addEventListener('click', function() {
    displayValue = displayValue + '0';
    display.textContent = displayValue;
});

let dotable = true;

const btnList = document.querySelectorAll('.button');
const miscBtns = [...btnList];
miscBtns[0].addEventListener('click', function() {
    displayValue = displayValue + ' + ';
    display.textContent = displayValue;
    dotable = true;
    if (displayValue.split('+').length > 2) {
        calculate();    
    };
});
miscBtns[1].addEventListener('click', function() {
    displayValue = displayValue + ' - ';
    display.textContent = displayValue;
    dotable = true;
    if (displayValue.split('-').length > 2) {
        calculate();    
    };
});
miscBtns[2].addEventListener('click', function() {
    displayValue = displayValue + ' * ';
    display.textContent = displayValue;
    dotable = true;
    if (displayValue.split('*').length > 2) {
        calculate();    
    };
});
miscBtns[3].addEventListener('click', function() {
    displayValue = displayValue + ' ÷ ';
    display.textContent = displayValue;
    dotable = true;
    if (displayValue.split('÷').length > 2) {
        calculate();    
    };
});


function calculate() {
    displayArr = displayValue.split(" ");
    firstNum = displayArr[0];
    operator = displayArr[1];
    secondNum = displayArr[2];
    if (operator == '÷' && secondNum == '0') {
        displayValue = 'ERROR';
        display.textContent = displayValue;
    } else {
        displayValue = Math.round(operate(firstNum, operator, secondNum) * 1000) / 1000;
        display.textContent = displayValue;
        dotable = true;
    };
};

miscBtns[5].addEventListener('click', function() {
    if (dotable === true) {
        displayValue = displayValue + '.';
        display.textContent = displayValue;
        dotable = false;
    };
});

miscBtns[6].addEventListener('click', function() {
    if (displayValue.split('+').length > 1
        || displayValue.split('-').length > 1
        || displayValue.split('*').length > 1
        || displayValue.split('÷').length > 1
        ) {
        calculate();  
    };
});