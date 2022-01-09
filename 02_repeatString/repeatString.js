let endingStr = "";

const repeatString = function(string, num) {
    endingStr = "";
 for(i = 0; i < num; i++){
    endingStr += string;
 }
 if(num < i){
     return endingStr = "ERROR";
 }
 else{
    return endingStr;
 }


};

// Do not edit below this line
module.exports = repeatString;
