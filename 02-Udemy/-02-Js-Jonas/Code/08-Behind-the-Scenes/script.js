'use strict';

// function calcAge (birthYear) {
//   const age = 2037 - birthYear
  
//   function printAge () {
//     let output = `${firstName}, you're age is ${age}, born in ${birthYear}`;
//                 console.log(output)

//     if (birthYear >= 1981 && birthYear <= 1996) {
//         var millennial = true;
//         const str = `Oh, and you're a millennial, ${firstName}`
//                   console.log(str);
//     };

//     function add (a, b) {
//       return a + b;
//     };
//   };
//   printAge();

//   return age

// };

// const firstName = "Islam"

// calcAge(1991);

// /*-----Hosting TDZ------*/
// // console.log(me);
// // // console.log(job);
// // console.log(year);


// var me  = "solo";
// let job = "no thing";
// const year = 1991;

// // Functions 
// // console.log(addDecl(2, 3));
// // console.log(addArrow(2, 3));





// function addDecl (a, b) {
//   return a - b
// }

// var addExpr = function (a, b) {
//     return a + b;
// }

// var addArrow = (a,  b) => a + b;


// // EXample
// console.log(undefined);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart () {
//   console.log("All products delete!");
// };

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);
  

/*----this keyword------- */


// const calcAge = function (birthYear) {  // [this] with Exper function();
//       console.log(2037 - birthYear);
//       console.log(this)             // return undefined;
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {   // [this] with arrow function();
//       console.log(2037 - birthYear);
//       console.log(this)           // return parent's  => widow.obj;
// }
// calcAgeArrow(1991);


// const jonas = {                 // [this] with Obj;
//     year: 1991,
//     calcAge: function () {
//       console.log(this)
//       console.log(2037 - this.year);
//     },
// }
// jonas.calcAge()    // return parent's => jonas;


// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;

// console.log(matilda.calcAge(200));

// const f = jonas.calcAge;
// f()


/*------'Regular function vs. Arrow function'------- */

// const jonas = {

//     firstName: 'jonas',
//     year: 1991,

//     calcAge: function () {
//       console.log(this)  // return jonas Obj;
//       console.log(2037 - this.year);

//       // solution 1
//       // const self = this;

//       // const isMillennial = function () {
//       //       console.log(self);
//       //       console.log(self.year >= 1981 && self.year <= 1996);
//       // };


//       // solution 2

//       const isMillennial =  () => {
//           console.log(this);
//           console.log(this.year >= 1981 && this.year <= 1996);
//       };
//       isMillennial()
//     },

//     greet: _ => {
//       console.log(this);
//       console.log(`Hey ${this.firstName}`)
//     },

// }

// jonas.greet()
// jonas.calcAge()


// // argument keyword;

// const addExpr = function (a,b) {
//     console.log(arguments);
//     return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow  = (a, b) => {   // not work with arrow function
//     console.log(arguments);
//     return a + b;
// };

// addArrow(2 , 5, 8);



// Primitives vs. Objects (Primitive vs. Reference Types);

let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);


const me  = {
  name: 'jonas',
  age: 30,
};

const friend = me;
      friend.age = 27;
      console.log("friend:", friend);
      console.log("me:", me);

// Primitives vs. Objects in Practice


// Primitives types
let lastName = "Williams";
let oldLastName = lastName;

lastName = "Davis";

console.log(lastName, oldLastName);


// reference types
const jessica = {
    firstName: "jessica",
    lastName: "williams",
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);
// marriedJessica = {};

// Copying objects 

const jessica2 = {
  firstName: "jessica",
  lastName: "walliams",
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
      jessicaCopy.lastName = "Davis";
      console.log('Before marriage:', jessica2);
      console.log('After amrriage:', jessicaCopy);

      jessicaCopy.family.push("mary");
      jessicaCopy.family.push("john");


  
      console.log("Before marriage:", jessica2);
      console.log("After marriage:", jessicaCopy);


















