// LECTURE: strict mode;
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D');
*/

// LECTURE: Functions
/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}
    
const appleJuice = fruitProcessor(5, 0);  // Storage the result with var
                    console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
                        console.log(appleOrangeJuice);

const num = Number('23');  // The Same Idea with Parameters;


// -----------ASSIGNMENT--------------

function describeCountry (country, population, capitalCity) {

  return console.log(`'${country}' has ${population} million people and its 
                      capital city is '${capitalCity}'`);
}

describeCountry("Egypt", 6, "cairo");
describeCountry("England", 10e6, "london");
describeCountry("Canada", 45e6, 'ottawa');
*/


// LECTURE: Function Declarations vs. Expressions
/*
// function declaration

function calcAge1 (birhtYear) {
    return 2037 - birhtYear
}

const age1 = calcAge1(1991);

// function experssion

const calcAge2 = function (birhtYear) {
    return 2037 - birhtYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2)

// -----------ASSIGNMENT--------------
// function declaration
function precentageOfWorld1 (country, population) {
  const precentage = (population / 7900) * 100;

  return `'${country}' has ${population} million people so 
        it's about ${precentage.toFixed(2)}% of the world population.`
}

let egyPrecentage    = precentageOfWorld1('EGYPT',106 );
let usaPrecentage    = precentageOfWorld1("USA", 329.5); 
let canadaPrecentage = precentageOfWorld1("CANADA", 37); 
                    console.log(egyPrecentage);
                    console.log(usaPrecentage);
                    console.log(canadaPrecentage);
// function experssion

const precentageOfWorld2 = function (country, population) {
  
    const precentage = (population / 7900) * 100;

  return `'${country}' has ${population} million people so 
    it's about ${precentage.toFixed(2)}% of the world population.`
}


let turkeyPrecentage    = precentageOfWorld2('TURKEY', 84.34);
let GermanyPrecentage   = precentageOfWorld2("Germany", 83.24); 
let australiaPrecentage = precentageOfWorld2("Australia", 25.69); 
                        console.log(turkeyPrecentage);
                        console.log(GermanyPrecentage);
                        console.log(australiaPrecentage);

*/


// LECTURE: Arrow Functions
/*
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
            console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>  {
        
    const age = 2037 -birthYear; 
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, "Bob"))
// -----------ASSIGNMENT--------------

const precentageOfWorld3 = (country, population) => {
      const precentage = (population / 7900) * 100;

  return `'${country}' has ${population} million people so 
        it's about ${precentage.toFixed(2)}% of the world population.`
}



let turkeyPrecentage    = precentageOfWorld3('TURKEY', 84.34);
let GermanyPrecentage   = precentageOfWorld3("Germany", 83.24); 
let australiaPrecentage = precentageOfWorld3("Australia", 25.69); 
                        console.log(turkeyPrecentage);
                        console.log(GermanyPrecentage);
                        console.log(australiaPrecentage);

*/

// LECTURE: Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}
                    of orange.`;

    return juice;
}

console.log(fruitProcessor(2, 3));

// -----------ASSIGNMENT--------------

const percentageOfWorld1 = (pop) => (pop / 7900) * 100;


function describePopulation (country, population) {

  let precentage = percentageOfWorld1(population)

  return `'${country}' has ${population} million people so 
    it's about ${precentage.toFixed(2)}% of the world population.`
}

console.log(describePopulation('EGYPT',106 ));
console.log(describePopulation("USA", 329.5));
console.log(describePopulation("CANADA", 37));
*/

// REVIEWING FUNCTION
/*
const calcAge = function (birhtYear) {
    return 2037 - birhtYear;
}

const yearsUntilRetirement = function (birhtYear, firstName) {
    
    const age = calcAge(birhtYear);
    const retirement = 65 - age;


    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}    

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1950, "mike"))

*/

/*-------Challenge #1-------- */
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
                calcAverage(1 , 5, 8);

// Test1 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgKoalas} vs. ${avgKoalas})`);

    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgKoalas})`);

    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas)



// Test2

scoreDolphins = calcAverage(85, 54, 41);
  scoreKoalas = calcAverage(23, 34, 27);


console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

*/



// LECTURE: Introduction to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//  Storage by Array
const friends = ["Michael", "Steven", "Peter"];
console.log(friends)

// Storage by Array Object's
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', "Alice"]; // reassigned the New Value

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);
console.log(jonas.length)

// Ex
const calcAge = function (birhtYear) {
    return 2037 - birhtYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

const ages = [
              calcAge(years[0]), 
              calcAge(years[1], 
              calcAge(years[years.length -1]))  // test this code again
            ]

            console.log(calcAge(years[years.length -1])) 
            console.log(ages);
            

// -----------ASSIGNMENT--------------

let populations = [
                  329.5,
                  84.34,
                  106 ,
                  37
              ];
  
  let has4Element = populations.length === 4;
                  console.log(has4Element);

let percentageOfWorld1 = (population) => {
      const precentage = (population / 7900) * 100;
    return precentage.toFixed(2) + "%";
}

let percentages = [
        percentageOfWorld1(populations[0]),
        percentageOfWorld1(populations[1]),
        percentageOfWorld1(populations[2]),
        percentageOfWorld1(populations[3]),
      ];

      console.log(percentages);
*/

// LECTURE: Basic Array Operations (Methods)
/*
const friends = ["Michael", "Steven", "Peter"];


// Add Elements
const newLength = friends.push("Jay");    // Add to the end
                console.log(friends);
                console.log(newLength);


friends.unshift("John");    // Add to the first
        console.log(friends);

// Remove elements
friends.pop()  // remove the elements form the end


const popped = friends.pop(); 
              console.log(popped);
              console.log(friends);

friends.shift(); // remove the elements form the first  
        console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));


friends.push(23);

      console.log(friends.includes("Steven"));
      console.log(friends.includes("Bob"));
      console.log(friends.includes(23));

  if (friends.includes("Steven")) console.log("You have a friend called Steven") 


  // -----------ASSIGNMENT--------------
const neighbours = [
                'Giza',
                'Cairo',
                'alex'
              ];

let newNeighbour = neighbours.push("Utopia")
                    
        console.log(neighbours);

let rmNeighbour = neighbours.pop();

        console.log(neighbours);

    if (!neighbours.includes("Qenaa")) {
        console.log('Probably not a central EGYPT country :D')
    }  
    
*/   
/*-------Challenge #2-------- */
/*
const calcTip = function (bill) {
      
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;
}


const bills = [125, 555, 44];
const tips   = [
                calcTip(bills[0]), 
                calcTip(bills[1]),
                calcTip(bills[2]) 
            ];
    console.log(bills, tips)
*/

// LECTURE: Introduction to Objects
/*
// Array
const jonasArray = [
      'Jonas',
      'Schmedtmann', 
      2037 - 1991,
      'teacher',
      ["Michael", "Peter", "Steven"]
    ];

// Object

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steven"]
    };
    
    
// -----------ASSIGNMENT--------------
  const myCountry = {
  country: "EGYPT" ,
  capital: "Cairo",
  language: "arabic",
  population: 106,
  neighbours: ['Libya', "Sudan", "Saudi"],
};

console.log(myCountry)
*/

// LECTURE: Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steven"]
};

  console.log(jonas);
  console.log(jonas.firstName);
  console.log(jonas['lastName']);


const nameKey = 'Name';
              console.log(jonas['first' + nameKey]);
              console.log(jonas['last'+ nameKey]);


const interestedIn = prompt('What do you wanna know about joans? Choose \n\
                        \n between firstName, lastName, age, job,friends and bestFriend');
                            
    
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}
          
// You can reassigned a new property & value
jonas.location = 'Portugal';
jonas['twitter'] = '@jonassschmedtman';
                console.log(jonas);

// challenge
const jonasBestFriend = jonas['bestFriend'] = "Michael";

if (jonas[interestedIn]) console.log(`'${jonasBestFriend}' is the best friend`)

// another way

console.log(`${jonas.firstName} has a ${jonas.friends.length}
  friends, and his best friend is called ${jonas.friends[0]}`)

// -----------ASSIGNMENT--------------

const myCountry = {
  country: "EGYPT" ,
  capital: "Cairo",
  language: "arabic",
  population: 106,
  neighbours: ['Libya', "Sudan", "Saudi"],
};

  myCountry.population    = 106 + 2;
  myCountry["population"] = myCountry.population - 2;
console.log(`${myCountry.country} has a ${myCountry.population} million population\ 
            ,${myCountry.language}-speaking people,\n\
            ${myCountry.neighbours.length} neighbouring countries and the capital\n\
            called ${myCountry.capital} `);

*/
// LECTURE: Object Methods
/*
const jonas = {
  // Properties
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Methods

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age  = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job},
            and he has ${this.hasDriversLicense? "'a'" : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge())

// Challenge
console.log(jonas.getSummary())



// -----------ASSIGNMENT-----------
const myCountry = {
  // Properties
  country: "EGYPT" ,
  capital: "Cairo",
  language: "arabic",
  population: 106,
  neighbours: ['Libya', "Sudan", "Saudi"],

  // Methods
  describe : function () {
    console.log(`${this.country} has a ${this.population} million population\ 
            ,${this.language}-speaking people,\n\
            ${this.neighbours.length} neighbouring countries and the capital\n\
            called ${this.capital} `);
  },

  checkIsland: function () {
      this.neighbours.length > 0 ? console.log(this.isIsland = false) 
                                :  console.log(this.isIsland = true); 
  },
};

        myCountry.describe()
        myCountry.checkIsland()
*/
/*-------Challenge #3-------- */
/*
const mark = {
      fullName: "Mark Miller",
      height: 1.69,
      mass  : 78, 

      // Methods
      calcBMI: function () {
          this.bmi = this.mass / this.height ** 2;
          return this.bmi;
      },
    };


const john = {
      fullName: "John Smith",
      height: 1.95,
      mass  : 92, 

      // Methods
      calcBMI: function () {
          this.bmi = this.mass / this.height ** 2;
          return this.bmi;
      },
    };

console.log(mark.calcBMI(), john.calcBMI())

    if (mark.bmi > john.bmi) {
      
        console.log(`${mark.fullName}'s BMI (${mark.bmi})
                  is higher than ${john.fullName}'s BMI (${john.bmi})`)

    } else if (john.bmi > mark.bmi) {

      console.log(`${john.fullName}'s BMI (${john.bmi})
      is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
    }
*/


// LECTURE: Iteration: The for Loop
/*

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋️`)
}

// -----------ASSIGNMENT-----------

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}
*/


// LECTURE: Looping Arrays, Breaking and Continuing
/*
const jonas = [
            'jonas',
            'schmedtmann',
            2037 - 1991,
            'teacher',
            ['Michael', 'Peter', 'Steven'],
            true
      ];

      const types = [];

    for (let i =0; i < jonas.length; i++) {
      //Reading form jonas array
        console.log(jonas[i], typeof jonas[i]);

        // Filling types array
        // types[i] = typeof jonas[i];
        types.push(typeof jonas[i])
    }
    console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

    for (let i =0; i < years.length; i++) {
      ages.push(2037 - years[i]);
    }
    console.log(ages);

// Continue and Break
console.log(`--- ONLY STIRNGS`);

for (let i =0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log(`---BREAK WITH NUMBER---`);
for (let i= 0; i < jonas.length; i++ ) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

// -----------ASSIGNMENT-----------
const populations = [10, 1441, 332, 83];
const percentages2 = [];
  for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
      percentages2.push(perc);
}
console.log(percentages2);
*/

// LECTURE: Looping Backwards and Loops in Loops
/*



const jonas = [
            'Jonas',
            'Schmedtmann',
            2037 - 1991,
            'teacher',
            ["Michael", "Peter", "Steven"],
            true
          ];

for (let i = jonas.length -1; i >= 0; i--) {
    console.log(i , jonas[i]);
}

for (let ex = 1; ex < 4; ex++) {
    console.log(`-------- Starting exercies ${ex}`);

    for (let rep = 1; rep < 6; rep++)  {
        console.log(`Exercise ${ex}: Lifting weight repetitino ${rep}🏋️`)
    }
}
// -----------ASSIGNMENT-----------

let listOfNeighbours = [
                    ['Canada', 'Mexico'],
                    ['Spain'], 
                    ['Norway', 'Sweden','Russia']
                  ];


for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours.length; y++)
                  console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/


// LECTURE: The while Loop

// ----------- ASSIGNMENT -----------

// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
// const perc = percentageOfWorld1(populations[i]);
// percentages3.push(perc);
// i++;
// }
// console.log(percentages3);

/*-------Challenge #4-------- */


