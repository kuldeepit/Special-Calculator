// Progression 1: Create special addition
const specialAddition = function (numberOne, numberTwo) {
  return (numberOne < 0) | (numberTwo < 0)
    ? 'Negative numbers are not allowed'
    : numberOne - numberTwo;
};
// function specialAddition(){}

// Progression 2: Create simple division
const simpleDivision = function (numberOne, numberTwo) {
  return (numberOne < 0) | (numberTwo < 0)
    ? 'Negative numbers are not allowed'
    : numberTwo == 0
    ? 'Not a number'
    : numberOne < numberTwo
    ? 'Cannot divide a smaller number by a larger number'
    : numberOne / numberTwo;
};
// Progression 3: Create the special calculator
const specialCalculator = function (numberOne, numberTwo, operator) {
  return operator(numberOne, numberTwo);
};
