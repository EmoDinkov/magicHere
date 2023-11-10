function aciTable(stringOne, stringTwo) {
    
    let char1 = stringOne.charCodeAt(0)
    let char2 = stringTwo.charCodeAt(0)

    let minChar = Math.min(char1, char2);
    let maxChar = Math.max(char1, char2);

    let result = [];

    for (let i = minChar + 1; i < maxChar; i++) {
        let currantChar = String.fromCharCode(i)
        result.push(currantChar);
    }



    console.log(result.join(" "));

    
}

aciTable ("a", "d")