function employee(arr) {

    for (let name of arr) {
        let employees = {name: name, number: name.length}
        console.log(`Name: ${employees.name} -- Personal Number: ${employees.number}`);
    }

   
}

employee ([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])