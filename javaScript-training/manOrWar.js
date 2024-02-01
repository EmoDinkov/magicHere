function manOrWar(arr) {
 
    let pirateShipStatus = arr.shift().split(">").map(Number);
    let warShipStatus = arr.shift().split(">").map(Number);
    let maxHp = arr.shift(Number);
 
    for (let current of arr) {
        let command = current.split(" ");
        let token = command.shift();
        console.log(token);
        if (token == "Retire") {
            break;
        } else if (token == "Fire") {
            console.log(`Pirate Ship`);
        } else if (token == "Defend") {
            console.log(`man-0-war`);
        } else if (token == "Repair") {
            console.log(`pirate rapr`);
        } else if (token == "Status") {
            console.log(`Status`);
        }
    }
    

}
 
manOrWar (["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])