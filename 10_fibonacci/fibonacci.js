const fibonacci = function(value) {
    value = parseInt(value)
    if (value > 0){
        let n1 = 0;
        let n2 = 1;
        let nextTerm = 1;
        for(let i = 0; i < value - 1; i++){
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return nextTerm
    }
    else if (value === 0){
        return 0;
    }
    else{
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
