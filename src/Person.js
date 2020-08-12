

class Person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.count = 0;
    }

    greeting()
    {
        this.count++;
        console.log(`Hello there ${this.firstName} ${this.lastName}, number of times called: ${this.count}`);
    }
}

let dan = new Person('Dan', 'Gelok');

dan.greeting();
dan.greeting();
dan.greeting();
dan.greeting();
dan.greeting();
dan.greeting();
dan.greeting();

let michael = new Person('Michael', 'Cortez');

michael.greeting();
michael.greeting();
michael.greeting();