const fibonacci = function(val) {
prev = 0;
next = 1;
if(val < 0) { return "OOPS"; }
    for(i=0; i < val; i++){
        next = prev + next;
        prev = next - prev;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
