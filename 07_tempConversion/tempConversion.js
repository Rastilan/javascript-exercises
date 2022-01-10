let num = 0;
let answer = 0;
const ftoc = function(F) {
  num = (F - 32) * 0.5555;
  return answer = Math.round(num * 10) / 10;

};

const ctof = function(C) {
  num = C * 1.8 + 32;
  return answer = Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
