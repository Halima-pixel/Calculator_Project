// The Calculator is going to contain functions for all basic math operations that can be found on a calculator
// Start by creating functions for:
/*add
subtract
multiply
divide*/

const add = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
     throw new Error("input a valid number");
    } 
    return a + b;
}

const subtract = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("input a valid number");
    }
    return a -b;
}

const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("input a valid number");
    }
    return a * b;
}

const divide = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("input a valid number")
    } else if ( b === 0 ) {
        throw new Error("cannot Divide by 0");
    }
    return a / b;
}

// Create a variable for the operands and operator
let operand1 = 0;
let operand2 = 0;
let operator = "";

// Create a function that takes and operator and two numbers and calls one of the above functions on the numbers
const operate = (operand1, operator, operand2) => {
    switch (operator) {
        case "+": 
            return add(operand1, operand2);
            break;
 
        case "-":
            return subtract(operand1, operand2);
            break;
        
        case "*":
            return multiply(operand1, operand2);
            break;
       
        case "/":
            return divide(operand1, operand2);
            break;

        default:
            throw new Error("Enter a Valid Operator");
     }
}

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");


buttons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
       btnText = (e.target.innerText)

       // Update the Display

       if (!isNaN(btnText)) {
        display.textContent += btnText;
       } else {
        operator = btnText;
        operand1 = parseFloat(display.textContent);
        display.textContent = "";
       }
    })
})

   



   
