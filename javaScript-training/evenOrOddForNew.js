function evenOrOddSum(num) {
    let numAsString = String(num)

    let sumOdd = 0;
    let sumEven = 0;

    for (let i of numAsString) {
        let numche = Number(i);
        
        if (numche % 2 == 0) {
            sumEven += numche
        } else {
            sumOdd += numche
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}

evenOrOddSum(1000435)