function sortedArrByTwoCriteria(arr) {
    
    let result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(result.join(`\n`));
}

sortedArrByTwoCriteria (['alpha',

'beta',

'gamma'])