'use strict';

/*Constructor Functions and the new Operator*/

const Person = function (firstName, birthYear) {
    
    this.firstName = firstName;
    this.birthYear = birthYear;

}

const jonas = new Person('jonas', 1991);
console.log(jonas);


const matilda = new Person('Matilda', 2017);
const jack    = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// PROTOTYPES;
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();


console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);


console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));


Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);


console.log(jonas.hasOwnProperty('sepcies'));


console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__)
console.log(jonas.__proto__.__proto__.__proto__);


const arr= [3, 4, 5, 6, 7, 8, 9];

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);


Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');



/*Coding Challenge*/;


const Car = function (make, speed) {
    
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);

}


const bmw = new Car('BMW', 120);
const mercedes = new Car('BMW', 95);



bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.accelerate();























// CONSTRUCTOR FUNCTION;


// function Student (id, username, total) {
//     // this{}; 
//     this.id = id;  // >this.id< = id 
//     this.username = username;
//     this.total = ((total / 470 )* 100).toFixed(1);

// }


// const student1 = new Student(39199305, 'islam salah', 374);

// console.log(`Name Of Student: ${student1.username};
// Your id: ${student1.id};
// Your Percentage ${student1.total}%; `)

// // const yassa = new Student();
// // const dosha = new Student();

















