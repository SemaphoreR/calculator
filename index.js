let firstNumber = ""
    operator = ""
    secondNumber = ""
    activeNumber = ""

function clear(){
    firstNumber = ""
    operator = ""
    secondNumber = ""
    activeNumber = ""
};

/*
firstNumber changes when:
    Operator/= pressed and activeNumber True

operator changes when:
    Operator/= pressed, activeNumber True, and operator False

secondNumber changes when:
    Operator/= pressed, firstNumber true, activeNumber True, and operator True

activeNumber changes when: 
    Number pressed
    Operator/= pressed, firstNumber True, activeNumber True, and operator True


function delButton(){
    remove last character from activeNumber
}

function calculate() {
    if firstNumber, operator, and activeNumber != "" && secondNumber = ""
        switch operator()
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

switch buttonPressed(){
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
    case plusOrMinus:
        makePlusOrMinus();
        break;
    case factorial:
        findFactorial();
        break;
    case float();
        addDecimal();
        break;
}

create eventListeners for all buttons/keys on press

Keyboard Event Keys:
9: 57, 105
8: 56, 104
7: 55, 103
6: 54, 102
5: 53, 101
4: 52, 100
3: 51, 99
2: 50, 98
1: 49, 97
0: 48, 96
Add: 56 + 16(Shift), 106
Subtract: 189, 109
Multiply: 88, 56 + 16(Shift), 106
Divide: 53 + 16(Shift), 111, 191
Decimal: 190, 110
Equals: 187, 13
Delete: 8, 46

Numpad0-9, Digit0-9
NumpadAdd, (Equal + ShiftLeft/ShiftRight)
NumpadSubtract, Minus
NumpadDivide, (Digit5 + ShiftLeft/ShiftRight), Slash
NumpadMultiply, (Digit8 + ShiftLeft/ShiftRight), KeyX
NumpadDecimal, Period
NumpadEnter, Equal, Enter
*/