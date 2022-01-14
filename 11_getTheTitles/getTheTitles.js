const getTheTitles = function(x) {

    const newArr = x.map(arr => {arr.title});
    // let newArr = [];
    // for(let i = 0; i < x.length; i++){       
    //     newArr.push(x[i].title);

    // }
    console.log(newArr);
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
