function perfectNumber(num) {
    
    let sumDivisior = 0;

    for (let divisior = 1; divisior < num; divisior++) {

        if (num % divisior == 0) {
            sumDivisior += divisior;
        }
    }

    if (sumDivisior == num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

}

perfectNumber(6)