function sorting(arr) {
    
    let lowToHighArr = arr.sort((a, b) => a - b);

    let sortedArr = [];
    
    while(lowToHighArr.length > 0) {
    let minNum = lowToHighArr.shift()
    let maxNum = lowToHighArr.pop()
    
    sortedArr.push(maxNum);
    sortedArr.push(minNum);
    }

    console.log(sortedArr.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])