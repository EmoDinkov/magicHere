function jsonConvert(name, lastName, hairColor) {
    let person = {};
        person.name = name;
        person.lastName = lastName;
        person.hairColor = hairColor;
    
    let convertedJsSon = JSON.stringify(person)
    console.log(convertedJsSon);
}
jsonConvert ('George', 'Jones',

'Brown')