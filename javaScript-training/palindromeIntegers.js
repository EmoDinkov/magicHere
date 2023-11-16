function palindromeIntegers (arr) {

  for (let num of arr) {
    let reverseNum = String(num).split('').reverse().join('');
    console.log(num == reverseNum)
  }

}

palindromeIntegers ([123,323,421,121])