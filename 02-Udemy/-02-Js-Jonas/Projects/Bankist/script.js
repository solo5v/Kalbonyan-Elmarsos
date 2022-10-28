'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-03-27T17:01:17.194Z',
    '2020-02-11T23:36:17.929Z',
    '2020-01-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-02-25T18:49:59.371Z',
    '2020-01-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementsDate = function (date, locale) {

  const calcDaysPassed = (date1, date2) => 
      Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
            

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
  
      // const day =`${date.getDate()}`.padStart(2, 0);
      // const month = `${date.getMonth() +1}`.padStart(2, 0); // month based 0;
      // const year = date.getFullYear();
      
      // return `| ${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurr = function (value, locale, currency) {
    
  return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency,
      }).format(value);

}




const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) 
                    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementsDate(date, acc.locale);

  
    const formattedMov = formatCurr(mov, acc.locale, acc.currency);
    // new Intl.NumberFormat(acc.locale, {
    //       style: 'currency',
    //       currency: 'USD'
    // }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date"><strong>${displayDate}</strong></div>

        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  

  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(acc.balance, acc.locale, acc.currency);;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(out), acc.locale, acc.currency);;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};
  
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {

  const tick = function (){
  
    let min = String(time / 60).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    

    labelTimer.textContent =`${min}:${sec}`;



    if (time === 0) {
        clearInterval(timer);
        labelWelcome.textContent = 'Log in to get started';
        containerApp.style.opacity = 0;
    }
    time--;

  }

  let time = 10

  tick()
  const timer = setInterval(time, 1000);
};


///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Date
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


// const now = new Date();
// const day =`${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() +1}`.padStart(2, 0); // month based 0;
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();

// labelDate.textContent = `| ${day}/${month}/${year}, ${hour}:${min}`;



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create the current Date
    const now = new Date();

    // WITH API 
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      yaer: 'numeric',
      // weekday: "long",
    };

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options)
                                    .format(now)


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
    updateUI(startLogOutTimer());
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add trasfer Date;
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());


    // Update UI
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();

  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    
    setTimeout(function () {

    
    // Add movement
    currentAccount.movements.push(amount);

    currentAccount.movementsDates.push(new Date());


    // Update UI
    updateUI(currentAccount);
  
      // reset timer
      clearInterval(timer);
      timer = startLogOutTimer();

    }, 2500);
  };
    
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and Checking Numbers
/*
console.log(23 === 23.0); // TRUE;

console.log(0.1 + 0.2);
console.log(.1 + .2 === .3);



// CONVERSION;
console.log(Number('23'));
console.log(+'23');   // using Unary operator to converted;

// PARSING;

console.log(Number.parseInt('30px', 10)) // tenth system;
console.log(Number.parseInt('e23', 10)) // false because should the first 
                                      //  to be extract;
        
console.log(Number.parseInt('  2.5rem  ')); // return only int number;
console.log(Number.parseFloat('  2.5rem  ')); // return the floating number;


console.log(Number.isNaN(20)); // false| beacause it's a number;
console.log(Number.isNaN('20')); // false| beacause it's a number;
                            // and the Number obj will be converted to num

console.log(Number.isNaN(+"20x")); // true| beacause it's not a number;|'x'|
console.log(Number.isNaN(23 / 0)); // false| beacause it's an infity number;
                                  // INFINITY NUMBER  is not a number


// CHECKING IF VALUE IS NUMBER ???;
console.log(Number.isFinite(20));     // TRUE           
console.log(Number.isFinite('20'));  // false;
console.log(Number.isFinite(+'20x'));  // false;
console.log(Number.isFinite(23 / 0));  // false;

*/



//  Math and Rounding;
/*
console.log(Math.sqrt(25)); // 5
        console.log(25 ** (1/ 2)); // 5
        console.log(8 ** (1/ 3)); // 5

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN;

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); 

console.log(Math.trunc(Math.random()* 6) +1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max-min) +1) + min;

console.log(randomInt(10, 20));


// Rounding integers;

console.log(Math.round(23.3));
console.log(Math.round(23.9));


console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.9));
console.log(Math.floor('23.9'));


console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));


// Rounding decimals;
console.log((2.7).toFixed(0)); // '3';
console.log((2.7).toFixed(3)); // '3';
console.log((2.345).toFixed(2)); // '3';
console.log(+(2.345).toFixed(2)); // '3';
*/

//  The Remainder Operator
/*
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5


console.log(8 % 3); // 2
console.log(8 / 3);


console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEvent = n => n % 2 === 0;
console.log(isEvent(8))
console.log(isEvent(23))
console.log(isEvent(514));

labelBalance.addEventListener('click', function () {

  
  [...document.querySelectorAll('.movements__row')].forEach(function (row,i) {
    
    if(i % 2 === 0) row.style.backgroundColor = 'orangered';
    if(i % 3 === 0) row.style.backgroundColor = 'blue' 
    
    
  })
})

*/


//  Numeric Separators
/*

const diameter = 287_460_000_000;
                console.log(diameter);


const price = 345_99;
            console.log(price);


const transferFee1 = 15_00;
const transferFee2 = 1_500;


const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
*/

// Working with BigInt;
/*
console.log(2 ** 53 -1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 +1);
console.log(2 ** 53 +2)
console.log(2 ** 53 +3)
console.log(2 ** 53 +4)

console.log(47357613488435893485789348342n);
console.log(BigInt(429783567825));

// OPERATIONS;
console.log(10000n + 1000n)
console.log(4845839859834758937895n * 345892895n);


const huge = 84584375834589734985n;
const num = 23;

console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');


// Divisions;

console.log(11n / 3n);
console.log(10 / 3);
*/

// Creating Dates
/*
// const dateNow = new Date();  // => The current Date;
// console.log(dateNow);

// console.log(new Date('Thu Jun 30 2022 13:43:49 GMT+0200')) 
// console.log(new Date('Dec 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));

// // DAYS NAME , MONTH(0, ...11), NUMBER OF DAY'S, HOUR ,.....
// console.log(new Date(2037, 9, 18, 7));


// console.log(new Date(0))//  unix date born


// WORKING WITH DATES
const future = new Date(2037, 10, 19, 15, 23);

console.log(future)
console.log(future.getFullYear());
console.log(future.getMonth()); // 0, 1, .... 11 months;
console.log(future.getDate());  // day of month; 1,... 30 days;
console.log(future.getDay());  // day of week; 1, 7;
console.log(future.getHours()); 
console.log(future.getMinutes());  
console.log(future.getSeconds());  
console.log(future.toISOString());  // 2037-11-19T13:23:00.000Z
console.log(future.getTime());  // 2142249780000; number of hours
                console.log(new Date(2142249780000)); // get acompelte date




console.log(Date.now()) // 1656590362796 number of date;



future.setFullYear(2040); // Mon Nov 19 2040 15:23:00 GMT+0200 (Eastern European Standard Time)

console.log(future)
*/


// Operations With Dates
/*
const future = new Date(2037, 10 , 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => 
                      Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1)
*/

//  Internationalizing Numbers (Intl)
/*
const num = 3888234.32;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: "EUR",
}




console.log('US:   ', new Intl.NumberFormat('en-US', options).format(num))
console.log('Germmany:   ', new Intl.NumberFormat('de-DE', options).format(num))
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num))
*/

// Timers: setTimeout and setInterval
/*
const ingerdients = ['olives', 'spinach'];

const pizzaMsg = (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`);
};


const pizzaTimer = setTimeout(pizzaMsg, 3000, ...ingerdients)

if (ingerdients.includes('spinch')) {
  clearTimeout(pizzaTimer);
  console.log(`Your oreder Cancled.....`)
};


// 

setInterval(function() {
  const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const sec = now.getSeconds();
  console.log(`${hour}:${minute}:${sec}`)
}, 1000)

*/



