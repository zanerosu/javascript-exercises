const reverseString = function(string) {
    Right = string.length - 1;
    output = '';
    while (Right >= 0){
        output += string[Right];
        Right -= 1;
    };

    return output;
};

// Do not edit below this line
module.exports = reverseString;
