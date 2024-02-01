function towns(arr) {
    for (let name of arr) {
        let nameSplit = name.split(" | ")
        let latitudeParsed = Number(nameSplit[1])
        let longitudeParsed = Number(nameSplit[2])

        let city = {town: nameSplit[0], latitude: latitudeParsed.toFixed(2), longitude: longitudeParsed.toFixed(2)}
        
        console.log(city);
    }
    

    // tuk moga i taka:

    // let [town, latidue, long tode] = town.split(" | ")
}

towns (['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])