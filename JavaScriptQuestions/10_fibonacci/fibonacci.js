const fibonacci = function(elem) {
    if (elem == 1 || elem == 2) {
        return 1
    } else if (elem ==0) {
        return 0
    } else if (elem <0) {
        return 'OOPS'
    } 

    return fibonacci(elem -1 ) + fibonacci(elem -2)
};

// Do not edit below this line
module.exports = fibonacci;
