function sumAndMinus(a,b,c) {
    
    let sum = (a,b) => a + b;
    let minus = (a,b) => a - b;

    let resultOne = sum(a,b);
    let result = minus(resultOne, c);
    console.log(result);

}

sumAndMinus (10, 5, 9)