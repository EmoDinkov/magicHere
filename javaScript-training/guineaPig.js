function guineaPig(arr) {
    
    let arrAsNumber = arr.map(Number)
    

    let foodGrams = arrAsNumber.shift() * 1000;
    let hayGrams = arrAsNumber.shift() * 1000;
    let coverGrams = arrAsNumber.shift() * 1000;
    let pigWeightGrams = arrAsNumber.shift() * 1000;


    let counter = 1;

    let hayNeeded = 0;
    let coverNeeded = 0;

    while(counter <= 30) {
        foodGrams -= 300;
        if(foodGrams < 0) {
            console.log("Merry must go to the pet store!");
            break;
        }
        if (counter % 2 == 0) {
            hayNeeded = foodGrams * 0.05;
            hayGrams -= hayNeeded;
            if (hayGrams < 0) {
                console.log("Merry must go to the pet store!");
                break;
            }
        }
        if (counter % 3 == 0) {
            coverNeeded = (pigWeightGrams / 3).toFixed(2);
            coverGrams -= coverNeeded;
            if (coverGrams < 0) {
                console.log("Merry must go to the pet store!");
                break;
            }
        }
        counter++;
}

if (foodGrams >= 0 && hayGrams >= 0 && coverGrams >= 0) {
console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams/1000).toFixed(2)}, Hay: ${(hayGrams / 1000).toFixed(2)}, Cover: ${(coverGrams / 1000).toFixed(2)}.`);
}

}

guineaPig (["10",

"5",

"5.2",

"1"])