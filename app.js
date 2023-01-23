const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");

const divideBtn = document.querySelector(".divideBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const equalBtn = document.querySelector(".equal");
let firstNumber;
let secondNumber;
let symbol;

const screen = document.querySelector(".screen");
const clearout = document.querySelector(".clear");
clearout.addEventListener("click", () => {
    let num = document.querySelector(".screen");
    num.innerHTML = "";
});

function oneclick(el) {
    let num = document.createElement("h4");
    num.innerText = el.target.innerText;
    screen.append(num);
}

function twoClick(el) {
    let screenValue = screen.textContent;
    let pureNumber = Number(screenValue.slice(0, -1));
    symbol = screenValue.slice(-1);
    firstNumber = pureNumber;
}

function equalFunction(el) {
    secondNumber = screen.textContent;
    screen.innerHTML = "";
    answer = eval(secondNumber);
    screen.append(eval(secondNumber))
}


one.addEventListener("click", oneclick);
two.addEventListener("click", oneclick);
three.addEventListener("click", oneclick);
four.addEventListener("click", oneclick);
five.addEventListener("click", oneclick);
six.addEventListener("click", oneclick);
seven.addEventListener("click", oneclick);
eight.addEventListener("click", oneclick);
nine.addEventListener("click", oneclick);
zero.addEventListener("click", oneclick);
point.addEventListener("click",oneclick);

divideBtn.addEventListener("click", oneclick);
multiplyBtn.addEventListener("click", oneclick);
minusBtn.addEventListener("click", oneclick);
plusBtn.addEventListener("click", oneclick);

divideBtn.addEventListener("click", twoClick);
multiplyBtn.addEventListener("click", twoClick);
minusBtn.addEventListener("click", twoClick);
plusBtn.addEventListener("click", twoClick);

equalBtn.addEventListener("click", equalFunction);



























function add(...theArgs) {
    len = theArgs.length;
    sum = 0;
    for (let i = 0; i < len; i++) {
        sum += theArgs[i];
    }
    return sum;
}

function subtract(...theArgs) {
    len = theArgs.length;
    sum = theArgs[0];
    for (let i = 1; i < len; i++) {
        sum -= theArgs[i]
    }
    return sum;
}

function multiply(...theArgs) {
    len = theArgs.length;
    sum = theArgs[0];
    for (let i = 1; i < len; i++) {
        sum *= theArgs[i];
    }
    return sum;
}

function divide(...theArgs) {
    len = theArgs.length;
    sum = theArgs[0];
    for (let i = 1; i < len; i++) {
        sum /= theArgs[i];
    }
    return sum;
}

function operate(operator, number1, number2) {
    if (operator == "plus") {
        return add(number1,number2);
    } else if (operator == "minus") {
        return subtract(number1, number2)
    } else if (operator == "div") {
        return multiply(number1, number2)
    } else {
        return divide(number1, number2)
    }
}
