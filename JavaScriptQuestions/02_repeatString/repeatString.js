const repeatString = function(string, numRepeat) {
    if (numRepeat < 0) {
        return "ERROR"
    }
    
    let combined = ""
    for (let i = 0; i < numRepeat; i++) {
        combined += string;
    }
    return combined
};

// Do not edit below this line
module.exports = repeatString;
