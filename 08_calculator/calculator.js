const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(nums) {
    return nums.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function(nums) {
    return nums.reduce((total, currentNum) => total * currentNum);
};

const power = function(base, power) {
    return Math.pow(base, power);
};

const factorial = function(num1) {
    if (num1 < 0){
      return -1;
    }
    else if (num1 === 0){
      return 1;
    }
    else{
      return (num1 * factorial(num1-1));
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
