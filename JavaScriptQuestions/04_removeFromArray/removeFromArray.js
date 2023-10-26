const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(item => !elementsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
