let firstNumber = null
    operator = null
    secondNumber = null
    activeNumber = ""

let equation = document.getElementById("equation").innerHTML
    activeNumber = document.getElementById("theActiveNumber").innerHTML

function clear(){
    document.getElementById("equation").innerHTML = ""
    document.getElementById("theActiveNumber").innerHTML = ""
};

function backspace() {
    document.getElementById("theActiveNumber").innerHTML = document.getElementById("theActiveNumber").innerHTML.toString().slice(0, -1);
}



/*
Rules for decimals/length of string:


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

function delButton(){
    remove last character from activeNumber
}
*/
function numberPress(number){
    if (document.getElementById("theActiveNumber").innerHTML.length < 20) {
    document.getElementById("theActiveNumber").innerHTML += number;
    }
}

function addDecimal(){
   
}}
/*


function addNumbers()
    if firstNumber = ""
        if currentNumber = ""
            ERROR
        else firstNumber = currentNumber
            operator = plus
    else if firstNumber != ""
        if operator = plus
            if currentNumber != ""
                secondNumber = currentNumber

        else   


function subtractNumbers()

function multiplyNumbers()

function divideNumbers()

function findFactorial()

function addDecimal()

function makePosOrNeg()


function calculate() {
    if firstNumber, operator, and activeNumber != "" && secondNumber = ""
        switch operator()
        case number:
            numberPress();
            break;
        case equals:
            calculate();
            break;
        case plus:
            addNumbers();
            break;
        case minus:
            subtractNumbers();
            break;
        case multiply:
            multiplyNumbers();
            break;
        case divide:
            divideNumbers();
            break;
        case default:
            return;
            break;
    }
*/
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
        addNumbers();
        break;
    case "minus":
        subtractNumbers();
    case "multiply":
        multiplyNumbers();
    case "divide":
        divideNumbers();
    case "float":
        addDecimal();
        break;
    case "toPower":
        findPower();
        break;
    case "equals":
        calculate;
        break;
    case "clear":
        clear();
        break;
    case "delete":
        backspace();
        break;
    case "default":
        return;
        break;
  }
})

/*
document.addEventListener('keydown', (event) => {
    if (typeof event.key === "number") {
        numberPress(event.key);
} else if (event.key === "+") {
        addNumbers();
} else if (event.key === "-") {
        subtractNumbers();
} else if (event.key === "*" || "x") {
        multiplyNumbers();
} else if (event.key === "%" || "/") {
        divideNumbers();
} else if (event.key === ".") {
        addDecimal();
} else if (event.key === "^") {
        findPower();
} else if (event.key === "=" || "Enter") {
      calculate();
}else return;})

*/

document.addEventListener('keydown', (event) => {
    if (event.key === 1) {
        numberPress(event.key);
    } else if (event.key === 2) {
        numberPress(event.key);
    } else return;
})