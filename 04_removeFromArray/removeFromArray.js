const removeFromArray = function(arr, ...remove) {
    let answer = arr.filter(val => !remove.includes(val));
    return answer;
};

// Do not edit below this line 
module.exports = removeFromArray;
