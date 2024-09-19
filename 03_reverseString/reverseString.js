const reverseString = function(strVal) {
    const strLength = strVal.length-1;    
    let result = "";
    for(let i = strLength;i>=0;i--){
        result = result + strVal[i];
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
