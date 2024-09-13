/*
let operation = prompt("What operation do you want to use (ie +, -, *, /)");
let num1 = prompt("What is the first value?");
let num2 = prompt("What is the second value?");
let sum = " ";

function operationTypes(x, y) {
    if (operation == "+") {
        sum = parseFloat(x)+parseFloat(y);
    } else if (operation == "-") {
        sum = parseFloat(x)-parseFloat(y);
    } else if (operation =="*") {
        sum = parseFloat(x)*parseFloat(y);
    } else if (operation == "/") {
        sum = parseFloat(x)/parseFloat(y);
    } else console.log("Operation is invalid, please enter different opperation.");
}

operationTypes(num1, num2);

function errorCodes() {
    if (sum == Infinity) {
        console.log("Cannot divide by zero.");
    } else if (isNaN(sum)) {
        console.log("Invalid input, plesae re-enter numbers.");
    } else console.log(parseFloat(sum));
}
errorCodes();
*/
let equation = eval(prompt("Enter Your Equation"))

function errorCodes() {
    if (equation == Infinity) {
        console.log("Cannot divide by zero.");
    } else if (isNaN(equation)) {
        console.log("Invalid input, plesae re-enter numbers.");
    } else console.log(parseFloat(equation));
}

errorCodes();