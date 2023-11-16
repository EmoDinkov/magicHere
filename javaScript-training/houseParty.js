function houseParty(arr) {
    
    let guess = [];

    for (let person of arr) {
        let command = person.split(` `)
        let name = command[0]
        let isOrNot = command[2]
        if (isOrNot == `going!`) {
            if (guess.includes(name)) {
            console.log(`${name} is already in the list!`);
            } else {
            guess.push(name);
            }
        } else {
            if (guess.includes(name)) {
                let index = guess.indexOf(name)
                guess.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }

    }

    console.log(guess.join("\n"));
}

houseParty (['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])