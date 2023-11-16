function factorialMath(numOne, numTwo) {


    
        let arr = [];
        let arr2 = [];

        let difference = putNumbersInArrOne(numOne) / putNumbersInArrTwo(numTwo)
        console.log(difference.toFixed(2));
        // let difference = multiplyArr / multiplyArrSecond 
        // console.log(difference.toFixed(2));
       
    function putNumbersInArrOne (numOne) {
        for (let i = numOne; i >= 1; i--) {
            arr.push(i);
        }
        let multiplyArr = arr.reduce((a, b) => a * b);
        return multiplyArr;
    }
    function putNumbersInArrTwo(numTwo) {
    for (let j = numTwo; j >= 1; j--) {
            arr2.push(j);
        }
        let multiplyArrSecond = arr2.reduce((v, g) => v * g);
        return multiplyArrSecond
    }
        
        
        
    
    }
factorialMath (6, 2)