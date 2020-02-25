/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax:
"name, age years old". So for example, if John is 19 years old then the function describe of his
object will return "John, 19 years old".
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hi my name is, ${this.name}`);
  }
  describe() {
    console.log(`${this.name}, is ${this.age} years old.`);
  }
}

const me = new Person('Patrick', 30);
me.sayHello();
me.describe();

/*
Create an object called Teacher derived from the Person class,
and implement a method called teach which receives a string called subject, 
and prints out: Sean teaches WebDev
*/

class Teacher extends Person {
  teaches(subject) {
    console.log(`${this.name}, teaches ${subject}`);
  }
}
const sean = new Teacher('Sean');
sean.teaches('Lego Fundamentals 101');
