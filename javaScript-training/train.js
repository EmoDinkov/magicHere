function train(arr) {

    let wagon = arr.shift();
    let newArr = wagon.split(" ").map(Number) // imam gi veche razdeleni
    let maxPassengers = arr.shift(); // 75

    for (let i = 0; i < arr.length; i++) {
        
        let command = arr[i]
        let tokens = command.split(` `)


        
        if (tokens[0] == `Add`) {
            let passengersNewWagon = Number(tokens[1]);
            newArr.push(passengersNewWagon);
        } else {
            let passengers = Number(tokens[0]);
            for (let j = 0; j < newArr.length; j++) {
                if ((newArr[j] + passengers <= maxPassengers)) {
                    newArr[j] += passengers
                    break;
                }
            }
            
        }

    }

    console.log(newArr.join(` `));
}

train (['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])