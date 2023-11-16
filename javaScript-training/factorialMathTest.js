function factorialMath(numOne, numTwo) {
    
    let arr = [];
    let arr2 = [];
    
    for (let i = numOne; i >= 1; i--) {
        arr.push(i);
    }
    let multiplyArr = arr.reduce((a, b) => a * b);

    for (let j = numTwo; j >= 1; j--) {
        arr2.push(j);
    }
    let multiplyArrSecond = arr2.reduce((v, g) => v * g);

    let difference = multiplyArr / multiplyArrSecond 
    console.log(difference.toFixed(2));
    
    

}
factorialMath (6, 2)