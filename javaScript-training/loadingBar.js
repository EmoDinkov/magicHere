function loadingBar (num) {


    let devide = num / 10
    let pct = "%"
    let dots = "."
 
    if (num != 100) {
  console.log(`${num}% [${pct.repeat(devide)}${dots.repeat(10 - devide)}]`);
  console.log(`Still loading...`);
    } else if (num = 0) {
        console.log(`0% [..........]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
    }
 
    
}

loadingBar(10)