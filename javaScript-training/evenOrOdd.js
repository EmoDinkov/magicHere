function evenOrOddSum(num) {
    let numAsString = String(num)

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < numAsString.length; i++) {
    
        let numche = Number(numAsString[i]);
        if (numche % 2 == 0) {
            sumEven += numche
        } else {
            sumOdd += numche
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}

evenOrOddSum(3495892137259234)