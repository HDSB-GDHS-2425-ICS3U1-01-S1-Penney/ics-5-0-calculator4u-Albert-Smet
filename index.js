let num1 = prompt("What is the first value?");
let num2 = prompt("What is the second value?");
let sum = " ";
let operation = prompt("What operation do you want to use (ie +, -, *, /)");

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
console.log(parseFloat(sum));