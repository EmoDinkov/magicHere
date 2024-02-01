funct

class cat {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }


    meow () {
        console.log(`${this.name}, age ${this.age} says Meow `);
    }

}

let myCat = new cat ('Mellow' ,2);
myCat.meow();


