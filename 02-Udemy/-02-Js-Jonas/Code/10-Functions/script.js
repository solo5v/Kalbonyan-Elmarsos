'use strict';

// Default Parameters
/*
const bookings = [];

const createBooking = function (flightNum, 
                                numPassengers = 1,
                                 price = 199 * numPassengers
                                ) {
  
  // THE DEFAULT VALUE OF PARAMETERS (OLD WAY) ES5
// numPassengers = numPassengers || 1;
// price = 199 * numPassengers
    const booking = {
        flightNum, 
        numPassengers,
        price,
    }

    bookings.push(booking)
    console.log(booking);
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', undefined, 1000)
*/

// How Passing Arguments Works: Value vs. Reference
/*
const flight = 'LH234';

const jonas = {
      name: 'jonas shcmedtmann',
      passport: 2344536545,
}


const checkIn = function (flightNumm ,passenger) {

  flightNumm = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2344536545) {
      alert('Checked in...');
  } else {
      alert('Wrong passport');
  }
  
  
}
checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

//


const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}
newPassport(jonas)
checkIn(flight, jonas);
console.log(jonas); 
*/

// Functions Accepting Callback Functions
/*
const oneWord = function (str) {

return str.replace(/ /g, '').toLowerCase() ;
}


const upperFirstWord = function (str) {
  
  const [first, ...other] = str.split(' ');

  return [first.toUpperCase(), ...other].join(" ");
} 

// HIGHTER-ORDER function;

const transform = function (str, fn) {
        
      console.log(`Original string: ${str}`);
      console.log(`Transformed string: ${fn(str)}`);
      console.log(`Transformed by: ${fn.name}`);
}

transform('javaScrtpt is the best!', oneWord)
transform('javaScrtpt is the best!', upperFirstWord)

// JS uses callBacks all the time;
const high5 = function () {
  console.log(`are clicky in body🤝`);
};

document.body.addEventListener('click', high5)

// ['adam', 'islam', 'adsf'].forEach(high5)

*/

// Functions Returning Functions 
/*
const greet = function (greeting) {
      return function (name) {
          console.log(`${greeting} ${name}`);
      }
}

const greeterHey = greet('Hey');

greeterHey('islam'.toUpperCase())

greet('Hello')('jonas');


const greetArrow = (greeting) => (names) => console.log(`${greeting} ${names}`);
      greetArrow('Hello')('mohsen');
*/


// The call and apply Methods;
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline}
                    flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    } 
};


lufthansa.book(234, 'Islam Vsalah');
lufthansa.book(353, 'john smith');
console.log(lufthansa.bookings);

const eurowings = {
      airline: 'Eurowings',
      iataCode: 'EW',
      bookings: [],
}

const book = lufthansa.book;  // storage the book method on var;

// book(23, 'ssial') 
// DOES NOT WORK becaues the method has (this.)keyWord and 
// the argument in global scope so (this.?) will be undefiend

// CALL method
const date1 = [23, 'mohammed ali']

book.call(eurowings, ...date1)


const swiss = {
    airline: 'Swiss AirLines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 4234, 'salah mohamed')
book.call(swiss, 3454, 'mostafa ali')
console.log(swiss.bookings);

// Apply method;
const flightDate = [234, 'George Cooper'];

//the specified array for the arguments of the function.
book.apply(swiss, flightDate)

// BIND method;


const bookEW = book.bind(eurowings)
const booLH  = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven williams')

const bookEW23 =  book.bind(eurowings, 23);

bookEW23('jonas schmedtamnn');
bookEW23('Martha Cooper');


// with Event Listeners;
const btnBuy = document.querySelector(".buy");



lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

btnBuy.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application ;
const addTax = (rate, value) => value + value * rate;
              console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
              console.log(addVAT(100));
              console.log(addVAT(23));


const addTaxRate = function (rate) {
  return value => value + (value * rate);
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100))
console.log(addVAT2(23))
*/


/* Coding Challenge #1*/



//  Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();  // YOU CAN INVOKED ALOT MANY; IT'S OK!


// function() {
//   console.log('This will never run again');
// }   // ERROR require a function name


//IIFE
(function() {
  console.log('This will never run again');
})  ();  



( _ => console.log('This will ALSO never run again')) ();
*/



// Closures

// const secureBooking = function () {
//     let passenger = 0;

//     return function () {
//         passenger++;
//         console.log(`${passenger} passengers`);
//     };
// };


// const booker = secureBooking()

// booker();
// booker();
// booker();

// console.dir(booker);

//Ex 1
let f;

const g = function () {

    const a = 23;
    f = function () {
      console.log(a * 2);
    };
}

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
}

g();
f();

console.dir(f)


// Re-assigning f function 
h();
f();

console.dir(f);


// Ex 2;
const boardPassengers = function (n, wait) {

      const perGroup = n / 3;

      setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
      }, wait * 1000);
      console.log(`Will start boarding in ${wait} seconds`);
};


const perGroup = 1000;

boardPassengers(180, 3)





