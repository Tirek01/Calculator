'use strict'
//basic math operator
function add(x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if(x == 0 || y == 0) {
        return 'error'
    } else {
        return x / y;
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case null:
            return currentValue;
    }
}

//calculator currentValue, nextValue
const displayResult = document.querySelector('.displayResult');
const displayNext = document.querySelector('.displayNext');
const displayOperator = document.querySelector('.displayOperator')
let currentValue = '';
let nextValue = '';
const digit = document.querySelectorAll('.digit');
digit.forEach(function(currentDigit) {
    currentDigit.addEventListener('click', function() {
        if(userOperator == null) {
            currentValue += currentDigit.value;
        } else {
            nextValue += currentDigit.value;
        }
        displayResult.textContent = currentValue;
        displayNext.textContent = nextValue;
    })
})

//operator keys, 
let userOperator = null;
const operator = document.querySelectorAll('.operator');
operator.forEach(function(oper) {
    oper.addEventListener('click', function() {
        if(userOperator != null && nextValue != '') {
            calculateResult();
        }
        userOperator = oper.textContent;
        displayOperator.textContent = userOperator;
        float.disabled = false;
        })
    })

//result
const result = document.querySelector('.result'); {
    result.addEventListener('click', function() {
        calculateResult();
        float.disabled = false;
    })
}

function calculateResult() {
    currentValue = operate(currentValue, nextValue, userOperator);
    displayResult.textContent = currentValue;
    nextValue = '';
    displayNext.textContent = nextValue;
}

//clear
const clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    displayResult.textContent = '';
    displayOperator.textContent = '';
    displayNext.textContent = '';
    currentValue = '';
    nextValue = '';
    userOperator = null;
})

//floating point numbers
const float = document.querySelector('.floating');
float.addEventListener('click', function() {
    if (userOperator == null) {
        currentValue = `${currentValue}.`
        displayResult.textContent = currentValue;
        
    } else {
        nextValue = `${nextValue}.`;
        displayNext.textContent = nextValue;
    }
    float.disabled = true;
})

//backspace undo last typed number
const undo = document.querySelector('.backspace');
undo.addEventListener('click', function() {
    const point = '.';
    if (userOperator == undefined) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
        displayResult.textContent = currentValue;
        currentValue.includes(point) ? float.disabled = true: float.disabled = false; 
    } else {
        nextValue = nextValue.substring(0, nextValue.length - 1);
        displayNext.textContent = nextValue;
        nextValue.includes(point) ? float.disabled = true: float.disabled = false; 
    }
})







