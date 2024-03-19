// Progression 1: Create special addition
const specialAddition = function (num1, num2) {
  return (num1 < 0) | (num2 < 0)
    ? 'Negative numbers are not allowed'
    : num1 - num2;
};
// function specialAddition(){}

// Progression 2: Create simple division
const simpleDivision = function (num1, num2) {
  return (num1 < 0) | (num2 < 0)
    ? 'Negative numbers are not allowed'
    : num2 == 0
    ? 'Not a number'
    : num1 < num2
    ? 'Cannot divide a smaller number by a larger number'
    : num1 / num2;
};
// Progression 3: Create the special calculator
const specialCalculator = function (num1, num2, operator) {
  return operator(num1, num2);
};
