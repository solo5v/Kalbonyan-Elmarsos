'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = { // to Enhanced Object Literals 
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
// to Enhanced Object Literals (METHOD)
  order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, 
                            mainIndex = 0,
                            time = '20:00',
                            address,}) {
    console.log(
                `Order received! ${this.starterMenu[starterIndex]} and
                ${this.mainMenu[mainIndex]} will be delivered to ${address};
                at ${time};
                    `);
  },
  
  orederPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza(mainIng, ...otehrIng) {
              console.log(mainIng)
              console.log(otehrIng);
  }
};

// Destructuring Objects
/*
// assgined object in function;
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 1, 
})



const {name , openingHours, categories} = restaurant;
                console.log(name, openingHours, categories)


const { name: restaurantName,
        openingHours: hours,
        categories:tags} = restaurant; 
        console.log(restaurantName, hours, tags)

// Default Values;

const {menu = [], starterMenu: starters = []} = restaurant; // starterMenu: starters = renamed
                                              console.log(menu,  starters)

// Mutating variables;
let a = 111;
let b = 999;

const obj = {a: 23, b:7, c:14};

({a, b} = obj); // Reassgin;

console.log(a, b );

// Nested objects;

const {fri: {open: o, close:c}} = openingHours;

console.log(o, c)

*/

// Destructuring Arrays
/*

// Destructuring Old Way

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2]; 
//       console.log(a , b , c);

// // Destructuring Modern Way;

// const [x , y , z] = arr;
//                   console.log(x, y ,z);

// Extracting Array from Objects and Destructuring;

//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

let [main, secondary] = restaurant.categories;
      console.log(main, secondary);

// change value;

const temp = main       // to storeage the main value ['italian];
      main = secondary // 'Pizzeria';
      secondary = temp // "italian"
      console.log(main, secondary);


const [starter, mainCourse] = restaurant.order(2, 0);
      console.log(starter, mainCourse);


//  Nested Array Destructuring ;

const nested = [2, 4, [5, 6]];

const [i, ,[j, k]] = nested;

          console.log(i , j ,k)

      // Default values'
const [p , q  ,r =10] = [8, 9];
    console.log(p, q,r);

*/
  
// Spread Operator (...)
/*
const arr = [7, 8 , 9];
const badNewArra = [1, 2, arr[0], arr[1], arr[2]];   // Without spread(...)
                  console.log(badNewArra);


const newArr = [1,2 , ...arr];  // ...arr = 7, 8 , 9;
              console.log(...newArr);
              console.log(1,2 , 7, 8, 9) // Without spread(...)

const newMenu = [...restaurant.mainMenu, 'soup'];
                console.log(newMenu);

                
//copy Array;
const mainMenuCopy = [...restaurant.mainMenu]; // COPIED in a new Array;

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
            console.log(menu);


// Iterables are: arrays, strings, maps , sets, NOT objects;
const str     = 'jonas';
const letters = [...str,'', 'S.'];
                console.log(letters);
                console.log(str);
                
// Real-world example

const ingredients = [
      prompt(`let's make pasta! Ingraedient 1?`),
      prompt(`Ingredient 2?`),
      prompt(`Ingerdient 3?`)
];

console.log(ingredients);

// WithOut spread operator;
// restaurant.orederPasta(ingredients[0], ingredients[1], ingredients[2]); 

// TO extract value from each Prompt by spread operator;
restaurant.orederPasta(...ingredients); 


// Object;

// copied each items from restaurant Obj to a new Obj and added properties
const newResturant = {
                  foundedIn: 1988,
                  ...restaurant,
                  founder: 'Guiseppe'
                };  
      console.log(newResturant);

// ADD the restaurant Obj and modify it in a new Obj
const restaurantCopy = {...restaurant};

      restaurantCopy.name = "Ristorante Roma";
      console.log(restaurantCopy.name)
      console.log(restaurant.name);
*/


// Rest Pattern
/*
// REST, beacause on LEFT side of =  Collect multiple UNKNOW elements;
let arr = [9, 8]
const [a, b, ...others] = [1, 2, 3, 4, 5]; // |^|
                        console.log(a, b, others);

// SPREAD, beacause on RIGHT side of = extract items from array
const array = [1, 2, ...[3,4]];

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu,
                                          ...restaurant.starterMenu
                                        ];
console.log(pizza, risotto, otherFood)  // otherFood => Array because (...)rest pattern

// Object;

const {sat, ...weekDays} = restaurant.openingHours;
                          console.log(weekDays)

// 2) function;

const add = function (...number) {  // UNKNOWN argument
    let sum = 0;
      for (let i =0; i < number.length; i++) sum += number[i];
      console.log(sum);
}

add(2,3);
add(5, 3, 7, 2);
add(8, 2 ,5 , 2, 1, 4);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

// Short Circuiting (&& and ||);
/*
console.log('----- ||OR -----');

// Use Any data type, return ANY data type, short-circuiting;

console.log(3    || 'jonas')
console.log(''   || 'jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23; // truthy value

const guests1 = restaurant.numGuests? restaurant.numGuests :10; //because TRUTHY value
              console.log(guests1);

restaurant.numGuests = 0; // falsy value
const guests2 = restaurant.numGuests || 10;
              console.log(guests2);

console.log('----- &&AND -----');

console.log(0 && 'jonas'); // will retrun the falsy-value if existing;
console.log(7 && 'jonas'); // return the last value if both is truthy-value;

// practical example;
if (restaurant.orderPizza) { // returned undefiend;
    restaurant.orderPizza('mushrooms', 'spinach');
};

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/


// Nullish Coalescing Operator (??)
/*
restaurant.numGusets = 0;

const guests = restaurant.numGusets || 10;
              // if (restaurant.numGusets) = falsy value will be return 
              // the second result;
              console.log(guests); // 10


const guestsCorrect = restaurant.numGusets ?? 10;
                    // if (restaurant.numGusets) = null OR undefiend 
                  // will be return (10) else returned restaurant.numGusets 
                  console.log(guestsCorrect)
*/

// Logical Assignment Operators
/*
const rest1 = {
    name: 'capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
      name: 'La piazza',
      owner: 'Giovanni Rossi',
};

// ~| WITH THE REGULAR (OR) ASSIGNMENT OPERATOR |~
// rest1.numGuests = rest1.numGuests || 10; // if truthy, the result will be first
// rest2.numGuests = rest2.numGuests || 10; // the result will be second 
//                                         // because the first is falsy-value

// ~| WITH THE LOGICAL (OR) ASSIGNMENT OPERATOR |~
// rest1.numGuests ||= 10; //rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10; 

// ~| NULLISH ASSIGNMENT OPERATOR |~
rest1.numGuests ??= 10;  // return numGuests;
rest2.numGuests ??= 10; // returned 10 because numGuests is (undefiend);
        

// AND assignment operator;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

        console.log(rest1);
        console.log(rest2);

*/


/*-------- Coding Challenge #1 ---------*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
        [ // TEAM 1
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [ // TEAM 2
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
  ],

  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2022',

  odds: {
        team1: 1.33,
        team2: 6.5,
        x: 3.25,
  },
};

// 1)
const [players1, players2] = game.players; // destructruing Array;
                            console.log(players1);

// 2) 
const [gk, ...fieldPlayers] = players1; // rest pattern => Collect multiple
                                       // elements from Arrays
          console.log(gk, fieldPlayers);

// 3) 
const allPlayers = [...players1, ...players2];
                  console.log(allPlayers);

// 4) 
const players1Final = [...players1, 'Thiago', 'Coutinho','Perisic']; // using spread
                  console.log(players1Final);

// 5) 
const {odds: {team1, x: draw, team2}} = game;
  console.log(team1, draw, team2);

// 6)
const printGoals =  function (...plaeyr) { // The parameter is UNKOWN argument;
      console.log(plaeyr)
      console.log(`${plaeyr.length} goals were scored ⚽🌟`)
};
      printGoals(...game.scored); 

// 7)
team1 < team2 && console.log(`Team 1 is more likely to win 🌟`)
team1 > team2 && console.log(`Team 2 is more likely to win 🌟`)


// const odds = team1 || team2;
// console.log(`(${odds}) is more likely to win 🌟`)
*/

// Looping Arrays: The for-of Loop;

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//               console.log(menu);

// for (const item of menu) console.log(item);

// for (const [i , el] of menu.entries()) {
//     console.log(`${i +1}: ${el}`);
// };

// console.log([...menu.entries()]);

// Looping Objects: Object Keys, Values, and Entries
/*
// Property NAMES; (Obj.keys(object))
const properties = Object.keys(openingHours);  // Return items in an Array;
                  console.log(properties);
            
let openStr = `We're open on ${properties.length} days: `;

for (const day of properties) openStr += `${day}, `;
                              console.log(openStr);


// Property VALUES; (Obj.values(object));

const values = Object.values(openingHours);
              console.log(values);
              
for (const hours of values) console.log(hours);


// Object.entries(object) => the index number and the Elemets it self;


const entries = Object.entries(openingHours);
              console.log(entries)

for (const [day, {open , close}] of entries)
    console.log(`On ${day}, we open at ${open}, and closing at ${close}`);

*/

// OPTIONAL CHAINING(?.);
/*
// CHECK for openhour and it's exist check for mon in openHour is exist or not
// by if and &&


// if (restaurant.openingHours && restaurant.openingHours.mon) 
//     console.log(restaurant.openingHours.mon.open);


// WITH OPTIONAL CHAINING;
console.log(restaurant?.openingHours)
console.log(restaurant.openingHours.fri?.open)
console.log(restaurant.openingHours.fri?.nap)

// EXample;
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      for (let day of days) {
          // console.log(day);
          const opening = restaurant.openingHours[day]?.open??'closing🔃';
          console.log(`On ${day}, we open at ${opening}`);
      }

// Method;
console.log(restaurant.order?.(0, 1)?? `Method's does not exist`);
console.log(restaurant.orderRisotto?.(4, 3)?? `Method's does not exist`);


// Arrays;

const users = [{name: 'jonas', email: 'hello@solo.io'}];

console.log(users[0]?.name?? 'user array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty') 
*/

/*-------- Coding Challenge #2 ---------*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
        [ // TEAM 1
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [ // TEAM 2
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2022',

  odds: {
        team1: 1.33,
        team2: 6.5,
        x: 3.25,
  },
};
// 1)
const players = game.scored;
  for (const [num, name] of players.entries()) 
      console.log(`Goal ${num +1}: '${name}'⚽🌟`)

// 2) 
const oddsValue = Object.values(game.odds);
let average = 0;

for (const odd of oddsValue) average += odd;
    average /= oddsValue.length; // average = average / oddsValue.length;
    console.log(average);


// 3)
const {team1: firstTeam ,
      team2: secondTeam , 
      odds: {team1, x: draw, team2}} = game;

console.log(`Odd of victory ${firstTeam}: ${team1} \n\
Odd of draw: ${draw} \n\
Odd of victory ${secondTeam}: ${team2} `);

// 4)








// for (const {team1, x: draw ,team2} of odds) 
//     console.log(team1 , draw, team2)

*/


// Sets(); constructor;
/*
const ordersSet = new Set([
    'pasta',
    'pizza',
    'pizza',
    'risotto',
    'pasta',
    'pizza'
]);
  console.log(ordersSet);
  console.log(ordersSet.size + ' it\'s size');


// Sets with String;
console.log(new Set('18594715'))
console.log(new Set('islam'))


// CHECK; 
console.log(ordersSet.size)  // size  === length;
console.log(ordersSet.has('pasta'))  // return false || true;
console.log(ordersSet.has('bread'))  // return false || true;

// TO ADD ITEMS use add() method;
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
// will accept a unique value!!;

// TO DELETE SPECIFIC VALUE; USE delete();
// ordersSet.delete("pasta")  // !
console.log(ordersSet.delete("pasta"));  // WILL RETURN FALSE IF NOT EXIST
                                        // ELSE RETURN TRUE!;
console.log(ordersSet);

// TO CLEAR ALL ELEMENTS INSIDE THE SET USE clear(); // => empty Arrays
// console.log(ordersSet.clear());


// GET ELEMENT'S BY INDEX [] NOT WORK => 'undefiend';
console.log(ordersSet);


// LOOPING 
for (const i of ordersSet) console.log(i);


// EXAMPLE;
const staff = ['waiter', 'chef','manager' ,'waiter','chef' ];


const uniqueStaff = [...new Set(staff)];

console.log(uniqueStaff);
*/


// Maps: Fundamentals
/*
const rest = new Map();   // to create a new Object
      
      rest.set('name', 'classico Italiano'); // Updated the Map() by 
                                            // set()-function to add key,value
      rest.set(1, 'firenez, Italy');     // Any dateType;
      rest.set(2, 'Lisbon, portugal');

  rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
      .set('open', 11)
      .set('close', 23)
      .set(true , 'we are open :D')
      .set(false, 'We are closed :(');// also you can chaining the set with map 


  // to get the value by the key FROM MAP() should use get()-function;
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// ex
const time = 10;
const timeMsg = time > rest.get('open') && time < rest.get('close')
              console.log(timeMsg);


const arr = [1, 2];
const h1  = document.querySelector(".heading");

            rest.set(arr, 'test');
            rest.set(h1, 'heading');

  console.log(rest);
  console.log(rest.size);

  console.log(rest.get(arr))
*/


// Maps: Iteration;





// Working With Strings - Part 1
/*
const airline = 'TAP Air Portuagl';
const plane   = 'A320';


// // Accessing With Indexes[ ];
// console.log(plane[0]);  // A
// console.log(plane[1]);  // 3
// console.log(plane[2]);  // 2
// console.log('B737'[0]); // B

// // With length
// console.log(airline.length);
// console.log('B737'.length);


// With methods

console.log(airline.indexOf('r'));  //
console.log(airline.lastIndexOf('r'));  // searshing from the end but it's 
                                      // count from the first index[0] 
console.log(airline.indexOf(' '));  // the first space between letter


// SLICE;   
console.log(airline.slice(4));  // Air Portuag
console.log(airline.slice(4, 7));  // Air
console.log(airline.slice(0, airline.indexOf(' ')));  // TAP;

console.log(airline.slice(airline.lastIndexOf(' ') +1));  
// used +1 to move one step of index to be not including space!!^;

console.log(airline.slice(-2)); // (-2) counted from the end and sliced
console.log(airline.slice(1, -1));

// ex 
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
    
        if (s === "B" || s === "E")
            console.log('you got the middle seat');
        else console.log('you got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('32C');
checkMiddleSeat('65E');
  


// How String is work
console.log(new String('islam'))

console.log(typeof new String('islam')); // Object

console.log(typeof new String('jonsa').slice(1)); // string
*/

// Working With Strings - Part 2
/*
const airline = 'TAP Air Portuagl';
              console.log(airline.toLowerCase());
              console.log(airline.toUpperCase());


// Fix capitalization in name;
const passenger       = 'jOnAS'; // Jonas;
const passengerLower  = passenger.toLowerCase();

const passengerCorrect = passengerLower[0].toUpperCase()
                        + passengerLower.slice(1)


console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = loginEmail.trim();
                    console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); 
                      console.log(normalizedEmail); // with chaining method

console.log(email === normalizedEmail); // 


// REPLACING;

const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(",", '.');
                console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23 !';

// console.log(announcement.replace('door', 'gate')); // replace only the first
console.log(announcement.replace(/door/g, 'gate')); // replace all (regular exp)

//BOOLEANS;
const plane = 'Airbus A320neo';
            console.log(plane.includes('A320'));
            console.log(plane.includes('Boeing'));
            console.log(plane.startsWith('Air'));

  if (plane.startsWith('Airbus') && plane.endsWith("neo")) console.log("done")



// practice exercise;


const checkBggage = function (items) {
  const baggage = items.toLowerCase();

        if (baggage.includes('knife') || baggage.includes('gun'))
            console.log('you are Not allowed on board');
        else console.log('welcome aboard!');
};

checkBggage('I have a laptop, some Food and a pocket Knife');
checkBggage('socks and camera');
checkBggage('Got some snakcks and a gun for protection');
*/

// Working With Strings - Part 3
/*
// SPLIT AND JOIN;

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'jonas schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
//                 console.log(newName);


// const capitalization = function (name) {
//       const names = name.split(' ');
//       let userName = [];

//       for (const n of names) {
//         // let firstLetter = n[0].toUpperCase();
//         //     userName.push(firstLetter  + n.slice(1));
        
//         userName.push(n.replace(n[0], n[0].toUpperCase()));
//       };
//         console.log(userName.join(" "));
  
// };
// capitalization('islam salah mohammed');
// capitalization('ahmed mohammed ali');


// PADDING

const msg = 'Go to gate 23!';

console.log(msg.padStart(18,'*').padEnd(22,'*'))
console.log(msg);


// EX

const maskCreditCard = function (num) {
      
  const str = num + '';  
    const last = str.slice(-4)


  return  console.log(last.padStart(str.length, "*"))
};
maskCreditCard(2232341111)
maskCreditCard('3123412341111')


// REPEAT;

const msg2 = 'Bad weather...All Departues Delayed...';
            console.log(msg2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}
planesInline(3);

*/

/*Coding Challenge #4*/


const textArea = document.createElement('textarea');
                  document.body.append(textArea)

const btn = document.createElement("button");
            document.body.append(btn)

btn.addEventListener('click' , function () {
  textArea.value
})




function transform (word) {
  
  











  
//       const cleanWord = word.trim().toLowerCase().split('\n').join('') ;
//         // As a String;!!!
//         const unscLetter = cleanWord.indexOf('_'); // position of "_" 
        
//             // let small = cleanWord[unscLetter +1] // the letter after '_'
//             // let cap   = small.toUpperCase();     // transform to upper
                  
//             // small = cap;  
//           let edit =  cleanWord.split('_').join('')

// console.log(edit[10])


//         // for (let i =0; i < cleanWord.length; i++) {

//         //     if (cleanWord[i] === '_') {

//         //       let missingLe = cleanWord[unscLetter +1].toUpperCase()
//         //       console.log(cleanWord)
//         //     }
//         // }
                  
}
console.log(transform(' Underscore_\nCase '));
// transform('first_name')
// transform('Some_Variable')
// transform('calculate_AGE')
// transform('Delayed_departure')






















