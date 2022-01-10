const sumAll = function(start, end) {
    let answer = 0;
    if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number"){
        return "ERROR";
    }
    else if(start > end){
        for(i = end; i <= start; i++){
            answer = answer + i;
        }
    }
    else if (end > start){
        for(i = start; i <= end; i++){
            answer = answer + i;
        }
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
