'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate    = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn   = document.querySelector('.summary__value--in');
const labelSumOut  = document.querySelector('.summary__value--out');
const labelTimer   = document.querySelector('.timer');
const labelSumInterest = document.querySelector('.summary__value--interest');

const containerApp       = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnLoan  = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort  = document.querySelector('.btn--sort');
const btnTransfer = document.querySelector('.form__btn--transfer');

const inputLoginPin = document.querySelector('.login__input--pin');
const inputClosePin = document.querySelector('.form__input--pin');
const inputTransferTo     = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount    = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputLoginUsername = document.querySelector('.login__input--user');


// DISPLAYING THE MOVEMENTS OF AN ACCOUNTS;
const displayMovements = function (movements, sort = false) {
      containerMovements.textContent = ""; 

      const movs = sort? movements.slice().sort((a, b) => a - b)
                      : movements;


      movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
              <strong>${i+1}</strong> ${type}
          </div>
          <div class="movements__value">${mov}€</div>
        </div>
              `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
  

// CREATE THE USER NAME OF THE ACCOUNTS OBJ{...}
const createUserName = function (accs) {

      accs.forEach(function (acc) {
        acc.userName = acc.owner
                          .toLowerCase()
                          .split(' ').map(name => name[0])
                          .join('');
      })

};
  createUserName(accounts)


// CALC THE MOVEMENTS AND PRINT IT IN BALANCE LABLE;
const calcBalance = function (acc) {

  acc.balance = acc.movements.reduce((acc , current) => acc + current, 0);
  
  labelBalance.textContent = `${acc.balance}€`;
};
  
  
// CALA THE SUMMARY (DEPOSITE, WITHORAWAL)
const calaDisplaySummary = function (acc) {

  // WORK WITH INCOMES;
    const incomes = acc.movements.filter(mov => mov > 0)
                    .reduce((acc, current) => acc + current, 0);
      
      labelSumIn.textContent = `${incomes}€`
  
  // WORK WITH OUT;
    const out = acc.movements.filter((mov) => mov < 0)
                .reduce((acc, current) => acc + current, 0);

      labelSumOut.textContent = `${-out}€`;
  // WORK WITH INTEREST;
    const interest = acc.movements.filter(mov => mov > 0)
                      .map(deposite => (deposite * acc.interestRate) / 100)
                      .filter((int, i, arr) => int >= 1)
                      .reduce((acc, int) => acc + int, 0);

      labelSumInterest.textContent = `${interest}€`
};

const updateUI = function (acc) {

  // DISPLAYING MOVEMENTS;
    displayMovements(acc.movements);

  // DISPLAYING BALANCE;
    calcBalance(acc);

  // DISPLAYING SUMMARY;
    calaDisplaySummary(acc)

}


// EVENT HANDELR (LOGIN);

let currentAcc;

// OPEN THE ACCOUNT CLIENTS;
btnLogin.addEventListener('click' , function (e) {

  e.preventDefault();

  currentAcc = accounts
                  .find(acc => acc.userName === inputLoginUsername.value);

    if (currentAcc?.pin  === +inputLoginPin.value) {


      // DISPLAYING WELCOME MSG;
      labelWelcome.textContent = `Welcome back, ${currentAcc.owner.split(' ')[0]}`;
      
      containerApp.style.cssText = `opacity: 100%;`;

      // clear input fields;
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginPin.blur()
    
      // UPDATE UI
        updateUI(currentAcc)

    }
})

// TO TRANSFER MONEYS; 
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts
                    .find(acc => acc.userName === inputTransferTo.value);
        
        if (amount > 0 && 
            receiverAcc && 
            currentAcc.balance >= amount && 
            receiverAcc?.userName !== currentAcc.userName
          ) {
            currentAcc.movements.push(-amount);
            receiverAcc.movements.push(amount);
            
            updateUI(currentAcc)
          }

})

// TO LOAN MONEYS; 

btnLoan.addEventListener('click', function (e) {
  
      e.preventDefault();
      
      const amount = +inputLoanAmount.value;

      if (amount > 0 && 
          currentAcc.movements.some(mov => mov >= amount * 0.1)
        ) {
          currentAcc.movements.push(amount);


          
          // UPDATE UI;
          updateUI(currentAcc);
        } else {
          alert('Sorry, You can\'t a loan')
        }

        inputLoanAmount.value = '';
})

// TO CLOSE ACCOUNT (DELETED);

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
      inputCloseUsername.value === currentAcc.userName&&
      +inputClosePin.value === currentAcc.pin
    ) {

      const index = accounts
                  .findIndex(acc => acc.userName === currentAcc.userName);


        accounts.splice(index, 1);


        // HIDE UI;

        containerApp.style.opacity = 0;
      }

      inputCloseUsername.value = inputClosePin.value = "";
})


// SORT THE MOVEMVENTS;
let sorted = false;
btnSort.addEventListener('click', function (e) {
      e.preventDefault();

      displayMovements(currentAcc.movements, !sorted);

      sorted = !sorted

});











/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array Methods 
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE() // return a copying an Array
// console.log(arr.slice(2)); // 'c', 'd' 'e';
// console.log(arr.slice(2, 4)); // 'c', 'd' // NOT including end!!
// console.log(arr.slice(-2)); // d , e;
// console.log(arr.slice(-1)); // e;
// console.log(arr.slice(1, -2)); // b, c;
// console.log(arr.slice()); // return a copying Array;

// console.log([...arr]) // copying with spread operator;

// SPLICE( ); // WORKING WITH THE SAME ARRAY;

// console.log(arr.splice(2));

// arr.splice(-1);
// arr.splice(1, 2)
// console.log(arr)

// REVERSE(); working with the same Array;

const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);


// CONCAT(); working with copying an Array
const letters = arr.concat(arr2);
                console.log(letters); 

console.log([...arr, ...arr2]) // CONCAT WITH SPREAD OP; WORK WITH A NEW ARR



// JOIN();

console.log(letters.join(" - "))
*/

// The new at() Method
/*
const arr = [23, 11, 64];

console.log(arr[0]);  // get the elements the index[num];
console.log(arr.at(0));  // it the same above^;



// .at() method's useful;

  // to get the last element we was used 
  console.log(arr[arr.length -1]); // the last element;
  console.log(arr.slice(-1)[0]);  /// get the last element;

  // with at();
  console.log(arr.at(-1)); // getting the last element;

  // the at() also working with string;
  console.log('islam'.at(2))

*/

//  Looping Arrays: forEach  
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i,movement] of movements.entries()) {

  if (movement > 0) {
            console.log(`Movement ${i +1} You deposited ${movement}`);
          } else {
            console.log(`Movement ${i +1} You withdrew ${Math.abs(movement)}`)
          }

}


// for (const movement of movements) {
//       if (movement > 0) {
//         console.log(`You deposited ${movement}`);
//       } else {
//         console.log(`You withdrew ${Math.abs(movement)}`)
//       }
// }


console.log('----- FOREACH -----');

movements.forEach(function (mov, i) { // each element will passed in (param)
  if (mov > 0) {
    console.log(`Movement ${i +1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i +1} You withdrew ${Math.abs(mov)}`)
  }
}); // breakk; doesn't work in it

*/


// forEach With Maps and Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach() with Map()
currencies.forEach(function (key, value, map) {
      console.log(`${key}: ${value}`)
});


// forEach() with Set()

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currencies.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
}); 
////!! the Set() doesn't has a key so we put (_) in param to prefer (unness)
*/


/*-- Coding Challenge #1 --*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  
    const correctDogs = dogsJulia.slice(1, -2);
    const allDogs     = [...correctDogs, ...dogsKate]; 

  allDogs.forEach(function (age, i){
    const msgDog   = `Dog number ${i +1} is an adult, and  is ${age} years old 🦮`
    const msgPuppy = `Dog number ${i+1} is still a puppy🐶`;
    const checkDogs = age >= 3? msgDog : msgPuppy;

          console.log(checkDogs); 
    });
  console.log(allDogs)
};

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
console.log(`----- ANOHTER DATA -----`);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

// // § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

// The map Method
/*
const eurToUsd = 1.1;

const movementsUSD = account1.movements.map(ele => ele * eurToUsd);
                    console.log(movementsUSD);

// WITH THE LOGIC ;

const movementsUSDfor = [];

for (const i of account1.movements) movementsUSDfor.push(i * eurToUsd);
                console.log(movementsUSDfor);



// ex

const movementsDesc = account1.movements.map(function (mov , i) {

  return `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

})
console.log(movementsDesc)




// f (mov > 0) {
//     console.log(`Movement ${i +1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i +1} You withdrew ${Math.abs(mov)}`)

*/

// The filter Method;
/*
  // working with deposit
const deposit = account1.movements.filter(mov => mov > 0); // returning only 
                                                          // TRUE
                console.log(deposit);


  // WITH THE LOGIC;
const depositFor = [];

for (const mov of account1.movements) 
      mov > 0 ? depositFor.push(mov) :'';
    
console.log(depositFor);


  // working with withdrawals;
const withdrawals = account1.movements.filter(mov => mov < 0 );
      console.log(withdrawals)  
*/



// The reduce Method
/*
const balance = account1.movements.reduce((acc, current) => acc + current);

console.log(balance)


// GET THE MAXIMUM VALUE;

const max = account1.movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
});

console.log(max)
*/

/*-- Coding Challenge #2 --*/
/*
const calcAverageHumanAge = function (ages) {

    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);

    const adults = humanAges.filter(age => age >= 18);

    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

return average;
}


const av1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const av2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

console.log(av1, av2)
*/


// The Magic of Chaining Methods

// const eurToUsd = 1.1;

// // PIPELINE;

// const totalDeopsitsUSD = account1.movements
//                         .filter(mov => mov > 0)
//                         .map((mov, i, arr) => mov * eurToUsd)
//                         .reduce((acc, mov) => acc + mov, 0);
//       console.log(totalDeopsitsUSD)


/*-- Coding Challenge #3 --*/
/*
const calcAverageHumanAge = function (ages) {

    const average = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
                    .filter(age => age >= 18)
                    .reduce((acc, age, i, arr) => acc + age  / arr.length,0)

  return average;
};

const av1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const av2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

  console.log(av1, av2);

*/


// The find Method
/*
      // return only the first element if checked by the condition;


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const firstWithdrawal = movements.find(mov => mov <0);

      console.log(firstWithdrawal)
      console.log(movements)


// Ex

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account)

// WITH LOGIC;

for (const acc of accounts) {

      if (acc.owner === 'Jessica Davis') {
          console.log(acc)
      }

}
*/

// some and every;
/*
// SOME: return true, or false; if any value in array EQUALITY the condition;
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // EQUALITY ===
  console.log(movements.includes(-130));


  // CONDITION;

  console.log(movements.some(mov => mov > 300));

// EVERY;
console.log(movements.every(mov => mov > 0));

console.log(account4.movements.every(mov => mov > 0));


// separate callback;  DRY;

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//  flat and flatMap
/*

// FLAT;
const arr = [[1,2,3], 4,[5,6], 7,8];
            console.log(arr.flat())

const arrDeep = [[[1,2],3], [4, [5,6]], 7, 8];
                console.log(arrDeep.flat(2));
              
const overBalance = accounts.map(acc => acc.movements)
                            .flat()
                            .reduce((acc , curr) => acc + curr );

                  console.log(overBalance);

// FLAT MAP; no deepth

const overBalance2 = accounts.flatMap(acc => acc.movements)
                            .reduce((acc, curr) => acc + curr);

console.log(overBalance2)

*/ 


// Sorting Arrays;
/*
// Strings

const owners = ['jonas', 'zach', 'adam', 'martha'];
            console.log(owners.sort())
            console.log(owners)


// Numbers

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort((a, b) => a-b);
          console.log(movements);

  
movements.sort((a, b) => b-a);
          console.log(movements);
*/

// More Ways of Creating and Filling Arrays



/*-- Coding Challenge #4 --*/




 