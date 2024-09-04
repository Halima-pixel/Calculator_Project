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
