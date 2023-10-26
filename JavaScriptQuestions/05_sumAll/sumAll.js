const sumAll = function(...twoNums) {
    if (typeof twoNums[0] !== 'number' || typeof twoNums[1] !=='number') {
        return "ERROR"
    }

    if (twoNums[0]<0 || twoNums[1] <0) {
        return "ERROR"
    }
    let start=twoNums[0]
    let end =twoNums[1]
    if (twoNums[0] > twoNums[1]) {
        start = twoNums[1]
        end = twoNums[0]
    }

    let commulativeSum = 0
    for (let n = start; n <= end; n++) {
        commulativeSum += n
    }
    return commulativeSum
};

// Do not edit below this line
module.exports = sumAll;