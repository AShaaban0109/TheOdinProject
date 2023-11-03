const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
	// let sum = 0
    // numbers.forEach(number => {
    //     sum+=number
    // });
    // return sum
    
    return numbers.reduce((sum, current) => sum + current, 0)
};

const multiply = function(numbers) {
    // let total = 1
    // numbers.forEach(number => {
    //     total*=number
    // });
    // return total 

    return numbers.reduce((product, current) => product * current, 1)
};

const power = function(base, exp) {
	return Math.pow(base,exp)
};

const factorial = function(num) {
	if (num == 0) {
        return 1
    }
    return num * factorial(num-1)
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
