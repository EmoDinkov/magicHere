function storeProvision(arr, arrTwo) {

    let products = {};
    
    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i]
        let quantity = Number(arr[i + 1]);

        products[product] = quantity;
    }

    for (let j = 0; j < arrTwo.length; j += 2) {
        let orderProduct = arrTwo[j]
        let orderQuantity = Number(arrTwo[j + 1]);
         
        if (orderProduct in products) {
            products[orderProduct] += orderQuantity
        } else {
            products[orderProduct] = orderQuantity
        }
    }

    let materials = Object.entries(products)
    for (let [m, n] of materials) {
        console.log(`${m} -> ${n}`);
    }

    
    // let rawMaterial = Object.keys(products)
    // let pcs = Object.values(products)
    
    // for (let k = 0; k < rawMaterial.length; k++) {
    //     console.log(`${rawMaterial[k]} -> ${pcs[k]}`);
    // }


    

}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])