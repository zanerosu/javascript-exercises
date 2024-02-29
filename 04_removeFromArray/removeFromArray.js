//Using rest parameter to convert last argument into array
const removeFromArray = function(array, ...values) {
    
    //Iterate through the array values array
    values.forEach((element) => {
        let index = array.indexOf(element);
        while(index !== -1){
            array.splice(index, 1)
            index = array.indexOf(element);
        }

    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
