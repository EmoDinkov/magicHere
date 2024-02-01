function muOnline(string) {

    let health = 100;
    let bitcoin = 0;
    let counter = 1

    let roomsArr = string.split("|")
 
    for (let i = 0; i < roomsArr.length; i++) {

    
        let splitRoom = roomsArr[i].split(" ")

        let command = splitRoom[0];
        let tokens = Number(splitRoom[1]);

        if (command == "chest") {
            bitcoin += tokens
            console.log(`You found ${tokens} bitcoins.`);
        } else if (command == "potion") {

            if (health + tokens >= 100) {
                let newHp = 100 - health   
                console.log(`You healed for ${newHp} hp.`);
                health += newHp
                console.log(`Current health: 100 hp.`);
            } else if (health + tokens < 100) {
                console.log(`You healed for ${tokens} hp.`);
                health += tokens
                console.log(`Current health: ${health} hp.`);
            }

        } else {
            health -= tokens
            if(health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counter}`);
                break;
            }
        }

        counter++;
    }

    if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
    }


    }

    


muOnline ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")