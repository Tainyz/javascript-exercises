const repeatString = function(strVal,num) {
    let resultStr = "";
    if(num<0){
        return "ERROR";        
    }
    for(let i=0;i<num;i++){
        resultStr += strVal;
    }
    return resultStr;

};

// Do not edit below this line
module.exports = repeatString;
