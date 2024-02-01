function personalInfo(firstName, lastName, age) {
    
    let person = {}
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}



let result = personalInfo("Petar", "pan", 20)

console.log(result);