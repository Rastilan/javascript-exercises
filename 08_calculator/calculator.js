const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  return arr.length ? arr.reduce((curVal, prevVal) => prevVal + curVal) : 0;
};

const multiply = function(arr) {
  return arr.length ? arr.reduce((curVal, prevVal) => prevVal * curVal) : 0;
};

const power = function(numVal, powerVal) {
  let answer = 1;
	for(let i = 0; i < powerVal; i++){
    answer = answer * numVal;
  }
  return answer;
};

const factorial = function(val) {
  let answer = val;
  let math = val - 1;
	for(let i = 0; i < math; i++){
    val--;
    answer *= val;
  } 
  if(answer < 1){ answer = 1; }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
