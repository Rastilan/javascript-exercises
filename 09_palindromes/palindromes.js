const palindromes = function (str) {
    let newStr = "";
    orig = str.toLowerCase().replace(/\W/g, "");
    newStr = orig.split("").reverse().join("");
    return (newStr === orig);
};

// Do not edit below this line
module.exports = palindromes;
