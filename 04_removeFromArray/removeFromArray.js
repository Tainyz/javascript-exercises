const removeFromArray = function(arrayVal,...delVal) {
    let arrLength = arrayVal.length;
    let result = []
    arrayVal.forEach(value => {
        if(!delVal.includes(value)){
            result.push(value);
        }        
    });


    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
