const sumAll = function(num1, num2) {

    if (num1 >= 0 && num2 >= 0 && typeof(num1) == "number" && typeof(num2) == "number"){
        let result = 0;
        for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
            result += i
        }
        return result
    }else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
