// The method they use is a lot better
const palindromes = function (string) {
    // // clean string
    // let cleanedString = string.toLowerCase()

    // let stringArray = string.split("")

    // let cleanedArray = []
    // stringArray.forEach(char => {
    //     if (char !== "." && char !== "," && char !== "?" && char !== "!") {
    //         cleanedArray.push(char)
    //     }
    // });

    // // Convert string to an array of chars, then reverse the array, then convert back
    // const reversedString = string.split("").reverse().join(""); 
    // if (string === reversedString) {
    //     return true
    // }

    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(processedString);
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;

palindromes("asf.asdf./")