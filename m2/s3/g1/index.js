class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    confront(x,y){
        if (x.age > y.age) {
            return x.firstName + " " + x.lastName + " è maggiore di " + y.firstName + " " + y.lastName;
        } else {
            return y.firstName + " " + y.lastName + " è maggiore di " + x.firstName + " " + x.lastName;
        }
    }
}


const FirstUser =  new User("Mario", "Rossi", "39", "Viterbo");

const SecondUser =  new User("Oiram", "Issor", "93", "Obretiv");

console.log(FirstUser.confront(FirstUser, SecondUser))
