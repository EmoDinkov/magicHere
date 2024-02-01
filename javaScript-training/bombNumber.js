function bombNumber(arr, bombArr) {
    
    let bombNumber = bombArr[0];
    let rangeBomb = bombArr[1];

    
    let doWeHaveBomb = arr.includes(bombNumber)

    if (doWeHaveBomb) {
        let bomb = arr.indexOf(bombNumber)
        arr.splice(bomb, bomb)
    } else {
        console.log(`No bomb number`);
    }

    let stillHaveMoreBomb = arr.includes(bombNumber)

    if (stillHaveMoreBomb) {
        let bomb = arr.indexOf(bombNumber)
        arr.splice(bomb, bomb + rangeBomb)
    } 
    let sum = 0;
    
    for (let num of arr) {
        sum += num
    }

    console.log(sum);
   

}
bombNumber ([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],
    
    [2, 1])