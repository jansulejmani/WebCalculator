let resultNum = document.getElementById("result-num");

function setZero() {
    resultNum.innerHTML = 0;
}

function set(num) {
    if (resultNum.innerHTML != 0){
        resultNum.innerHTML = resultNum.innerHTML + String(num);
    }
    else {
        resultNum.innerHTML = String(num);
    }
}

let addCalled = false;
let subtractCalled = false;
let multiplyCalled = false;
let divideCalled = false;
let moduloCalled = false;
let num1;

function equals() {
    if (addCalled) {
        resultNum.innerHTML = Number(num1) + Number(resultNum.innerHTML);
        addCalled = false;
    }
    else if (subtractCalled) {
        resultNum.innerHTML = Number(num1) - Number(resultNum.innerHTML);
        subtractCalled = false;
    }
    else if (multiplyCalled) {
        resultNum.innerHTML = Number(num1) * Number(resultNum.innerHTML);
        multiplyCalled = false;
    }
    else if (divideCalled) {
        resultNum.innerHTML = Number(num1) / Number(resultNum.innerHTML);
        divideCalled = false;
    }
    else if (moduloCalled) {
        resultNum.innerHTML = Number(num1) % Number(resultNum.innerHTML);
        moduloCalled = false;
    }
}

function add() {
    addCalled = true;
    num1 = resultNum.innerHTML;
    resultNum.innerHTML = 0;
}

function subtract() {
    subtractCalled = true;
    num1 = resultNum.innerHTML;
    resultNum.innerHTML = 0;
}

function multiply() {
    multiplyCalled = true;
    num1 = resultNum.innerHTML;
    resultNum.innerHTML = 0;
}

function divide() {
    divideCalled = true;
    num1 = resultNum.innerHTML;
    resultNum.innerHTML = 0;
}

function quadratic() {
    resultNum.innerHTML = Number(resultNum.innerHTML) * Number(resultNum.innerHTML);
}

function changeSign() {
    if (resultNum.innerHTML < 0) {
        resultNum.innerHTML = -1 * Number(resultNum.innerHTML);
    }
    else {
        resultNum.innerHTML = -1 * Number(resultNum.innerHTML);
    }
}

function modulo() {
    moduloCalled = true;
    num1 = resultNum.innerHTML;
    resultNum.innerHTML = 0;
}