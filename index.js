const firstNumber = document.getElementById("firstNumber")
const operator = document.getElementById("activeOperator")
const secondNumber = document.getElementById("secondNumber")
const activeNumber = document.getElementById("activeNumber")

function oops() {
    activeNumber.innerHTML = activeNumber.innerHTML.slice(0, -1);
}

function clear(){
    firstNumber.innerHTML = ""
    operator.innerHTML = ""
    secondNumber.innerHTML = ""
    activeNumber.innerHTML = ""
}

function numberPress(value){
    if (activeNumber.innerHTML.length < 20) {
    activeNumber.innerHTML += value;
}}

function changeOperator(value) {
switch (value) {
    case "plus":
    case "+":
        operator.innerHTML = "+"
        break;
    case "minus":
    case "-":
        operator.innerHTML = "-"
        break;
    case "multiply":
    case "*":
    case "x":
        operator.innerHTML = "*"
        break;
    case "divide":
    case "%":
    case "/":
        operator.innerHTML = "%"
        break;
    case "toPower":
    case "^":
        operator.innerHTML = "^"
        break;
    case "default":
        break;
}}

function operatorPress(value){
    if ((operator.innerHTML == "") && (activeNumber.innerHTML != "")) {
        changeOperator(value);
        firstNumber.innerHTML = activeNumber.innerHTML;
        activeNumber.innerHTML = "";
    } else if ((operator.innerHTML != "") && (firstNumber.innerHTML != "") && (secondNumber.innerHTML != "")) {
        alert("This should work...") //use this to redirect to function that handles the calculations
    }
}


function addNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) + parseFloat(b);
}

function subtractNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) - parseFloat(b);
}

function multiplyNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) * parseFloat(b);
}

function divideNumbers(a, b){
    activeNumber.innerHTML = parseFloat(a) / parseFloat(b);
}

function addDecimal(){
    if(activeNumber.innerHTML.indexOf(".") === -1){
        if (activeNumber.innerHTML.length < 20){ 
            activeNumber.innerHTML += ".";
 }}}
 
 function makePosOrNeg(){
     activeNumber.innerHTML = parseFloat(activeNumber.innerHTML) * -1;
 }

function findPower(a, b){
    activeNumber.innerHTML = Math.pow(parseFloat(a), parseFloat(b));
}

/*
firstNumber changes when:
    Operator/= pressed and activeNumber True

operator changes when:
    Operator/= pressed, activeNumber True, and operator False
    Operator pressed, first/second True, operator True

secondNumber changes when:
    Operator/= pressed, firstNumber true, activeNumber True, and operator True
    Operator pressed, secondNumber true

activeNumber changes when: 
    Number pressed
    Operator/= pressed, firstNumber True, activeNumber True, and operator True

equalSign changes when:
    secondNumber changes

}


*/

//button support
const wrapper = document.getElementById('buttons');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  switch (event.target.id) {
    case "0":
    case "1":
    case "2": 
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        numberPress(event.target.id);
        break;
    case "plus":
    case "minus":
    case "multiply":
    case "divide":
    case "toPower":
        operatorPress(event.target.id);
        break;
    case "float":
        addDecimal();
        break;
    case "plusOrMinus":
        makePosOrNeg();
    case "equals":
        calculate;
        break;
    case "clear":
        clear();
        break;
    case "delete":
        oops();
        break;
    case "default":
        return;
        break;
  }
})

//keyboard support
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "0":
        case "1":
        case "2": 
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            numberPress(event.key);
            break;
        case "+":
        case "-":
        case "*":
        case "x":
        case "%":
        case "/":
        case "^":
            operatorPress(event.key);
            break;
        case ".":
            addDecimal();
            break;
        case "=":
        case "Enter":
            calculate();
            break;
        case "Delete":
            clear();
            break;
        case "Backspace":
            oops();
            break;
        case "default":
            break;
    }})