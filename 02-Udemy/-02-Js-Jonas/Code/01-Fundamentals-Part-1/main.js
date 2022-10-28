// LECTURE: Values and Variables
/*
let js = "amazing";
        console.log(40 + 8 + 23 - 10 );

        console.log("jonas");
        console.log(23);

let firstName = "Matilda";
        console.log(firstName);
        console.log(firstName);
        console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

//  BEAST PRACITCE
let firstJob   = "programmer";
let currentJob = "teacher";

//  NOT SUGG
let job1 = "programmer";
let job2 = "teacher"

//   -------assignment---------
        console.log("--- assignment ---")
let country    = "EGYPT";
let continent  = "AFRICA";
let population = 105_000_000;
                console.log(country)
                console.log(continent)
                console.log(population)

*/

// LECTURE: dataTypes
/*
let jsIsFun = true;
            console.log(jsIsFun);
            console.log(typeof 23);  
            console.log(typeof true);  
            console.log(typeof "solo");  
            console.log(typeof jsIsFun);  

    jsIsFun = "YES!";
            console.log(typeof jsIsFun);

let year;
console.log(typeof year);

year = 1992; 
console.log(typeof year);

console.log(typeof null);

//   -------assignment---------
    console.log("---assignment---");

let isIsland = "Gftoon";

let language;
              console.log(typeof country);
              console.log(typeof isIsland);
              console.log(typeof language);
              console.log(typeof population);
*/

// LECTURE: let, const and var
/*
let age = 30;
    age = 31;

const birthYear = 1991;


var job = "programmer";
    job = "Teacher";

lastName = "Schmedtmann";
        console.log(lastName);

//   -------assignment---------
const myLanguage;
    myLanguage = "egyption arabic";

let myAge = 18;
*/

// LECTURE: Basic Operators
/*
const now      = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
                console.log(ageJonas, ageSarah);
                console.log(ageJonas * 2, ageJonas /10, 2**3);

const name1 = "Jonas";
const name2 = "schmedtmann";
            console.log(name1 + " " + name2);


let w,m;
        w = m = 25 - 10 - 5; // w = m = 10, w = 10 ;
        console.log(w, m);

const averageAge = (ageJonas + ageSarah) / 2
                  console.log(ageJonas, ageSarah , averageAge);

// ASSINGMENT OPERATORS
let x = 10 + 5; 
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const jsIsFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//   -------assignment---------
let egyPopulation = 105_000_000;
let halfPopulation = egyPopulation / 2;
    let half      = halfPopulation
                    console.log(half + " " + "is half the population");
                    half++
                    console.log(half);

const finlandPopultion = 6_000_000;
      let isMore = egyPopulation > finlandPopultion
                    console.log(isMore);

let otherAveragePop = 33_000_000;
                    console.log(egyPopulation < otherAveragePop);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
                console.log(typeof description === "string");

*/
/*--------Challenge #1---------*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark =  massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiMark > bmiJohn ;

console.log(bmiMark, bmiJohn, markHigherBMI);
*/


// LECTURE: Strings and Template Literals
/*
const firstName = 'jonas';
const birthYear = 1991;
const year      = 2037;
const job  = 'teacher';

const jonas = "i'm" + firstName + ',a ' + (year - birthYear ) + ' years old' +
              job + "!";
              console.log(jonas);

const jonasNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}`;
              console.log(jonasNew);

              console.log(`just a regular string...`);
              
console.log('string with \n\
multiple \n\
lines')
  

console.log(`string
multiple
lines`)
//   -------assignment---------
let description = `Portugal is in Europe, and its 11 million
                    people speak portuguese`
*/

// LECTURE: if / else Statements
/*
const age = 15;

if (age >= 18) {
    console.log('sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age ;
        console.log(`sarah is too young. Wait another
                    ${yearsLeft} year :)`);
}


const birthYear = 2012;

    let century;
if (birthYear <= 2000) {
    century = 20;
} else {
  century = 21;
}
  console.log(century);

//   ------- assignment ---------

const egyPop = 105_000_000;

const otherAveragePop = 33_000_000;


if (egyPop > otherAveragePop) {
    console.log(`EGYPT's population is above average`);
} else {
  console.log(`EGYPT's population is below average`);

}
*/

/*--------Challenge #2---------*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark =  massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);


if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`);
  } else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);
  }
*/

//LECTURE: Type Conversion and Coercion
/*
// type conversion 

const inputYear = '1991';
                console.log(Number(inputYear), inputYear); // 1991 , '1991'
                console.log(Number(inputYear) + 18);   // 2009
    
      console.log(Number("jonas"));  // NaN (not a number);
      console.log(typeof NaN);      // number

      console.log(String(23) , 23)  // '23' , 23;

// type coercion

console.log('I am ' + 23 + ' years old'); // the number converted to String
console.log('23' - '10' - 3);     // converted to number
console.log('23' - '10' - 3);    // converted to number
console.log('23'/ '2')          // converted to number


let n = '1' + 1;  // '11'   (let => to redclare)

n = n - 1;   // converted to number
    console.log(n);


// TRUTHY FALSY VALUES

// 5 Falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

  if (money) {
      console.log("Don't spend it all :)")
  } else {
      console.log("You should get a job!");
  };

let height = 123;

  if (height) {
      console.log('YAY! Height is defined');
  } else {
      console.log('Height is UNDFINED');
  }


  //   ------- assignment ---------
  
  // '9' - '5';      // 4
  // '19' - '13' + '17';  // '617'
  // '19' - '13' + 17; // 23
  // '123' < 57;      // false
  // 5 + 6 + '4' + 9 - 4 - 2; // 1143
  
  
  console.log('9' - '5')
  console.log('19' - '13' + '17')
  console.log('19' - '13' + 17)
  console.log('123' < 57)
  console.log(5 + 6 + '4' + 9 - 4 - 2)
  
  
  */
  

// LECTURE: Equality Operators: == vs! ===
/*
const age = "18";

  if (age === 18) console.log('You just became an adult :D (strict)');

  if (age == 18) console.log('You just became an adult :D (loose)');


const favourite = Number(prompt("What's your favourite number?"));
                  console.log(favourite);
                  console.log(typeof favourite);

  if (favourite === 23) {
      console.log('Cool! 23 is an amazing number!');
  } else if (favourite === 7) {
            console.log('7 is also a cool number');
  } else if (favourite === 9) {
            console.log('9 is also a cool number')
  } else {
            console.log("Number is not 23 or 7 or 9");
  }
      
if  (favourite !== 23) console.log("why not 23?");
//   ------- assignment ---------

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
      console.log("Only 1 border");
    } else if (numNeighbours > 1) {
      console.log("More than 1 border")
    } else {
      console.log("No borders");
    }
    */


// LECTURE: Logical Operators
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



const isTired = false;

    console.log(hasDriversLicense && hasGoodVision && isTired);


    if (hasDriversLicense && hasGoodVision && !isTired) {
        console.log('Sarah is able to drive!');
    } else {
      console.log('someone else should drive....');
    }

    //   ------- assignment ---------
    
    let country    = "cairo";
    let population = 50_000_000;
    const isIsland = false;
    const speaksEN = true;
    
    if (population <= 50e6 && speaksEN && !isIsland ) {
        console.log(`You should live in '${country}'`)
      } else {
        console.log(`'${country}' does not meet your criteria`)
      }
*/

/*--------Challenge #3---------*/
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas   = (88 + 100 + 110) /  3;


    if (scoreDolphins > scoreKoalas) {
        console.log(`'Dolphins' win the trophy🏆`);
    } else if (scoreDolphins < scoreKoalas) {
        console.log(`'Koalas' win the trophy🏆`);

    } else if (scoreDolphins === scoreKoalas) {
        console.log('Both win the trophy!');
    }
    // BONUS 1 
    
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas   = (88 + 100 + 110) /  3;

      if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
          console.log(`'Dolphins' win the trophy🏆`);
        
        } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
          console.log(`'Koalas' win the trophy🏆`);

        } else if (scoreDolphins === scoreDolphins && 
                    scoreDolphins,scoreKoalas >= 100)
                {
                console.log('Both win the trophy!');
        } else {
          console.log('No one wins the trophy')
        }

*/


//  LECTURE: The switch Statement
/*
const day = 'thursday';


// switch (day) {
//   case 'monday' :
//                   console.log('plan course structure');
//                   console.log('Go to coding meetup');
//         break;
//   case 'tuesday':
//                   console.log('prepare theory videos');
//         break;
//   case 'wednesday':
//   case 'thursday' :
//                   console.log('Write code examples');
//         break;
//   case 'firday' : 
//                   console.log('record videos');
//         break;
//   case 'saturday':
//   case 'sunday'  :
//                   console.log('Enjoy the weekend :D');
//         break;
//   default:
//           console.log("not a valid day!");    
//   }               

  if (day === 'monday'){
      console.log('plan course structure');
      console.log('Go to coding meetup');
  } else if (day === 'tuesday') {
          console.log('prepare theory videos');

  } else if (day === 'wednesday' || "thursday") {
            console.log('Write code examples');

  } else if (day === 'firday') {
            console.log('record videos');

  } else if (day === 'saturday' || "sunday") {
            console.log('Enjoy the weekend :D');
  } else {
    console.log("not a valid day!");
  }

  
  //   ------- assignment ---------

let language = 'arabic'; // input the language;

  // switch(language) {
  //   case "chinese" :
  //   case "mandarin": console.log(`'MOST number of native speakers!'`);
  //         break;
  //   case "spanish" : console.log('2nd place in number of native speakers');
  //         break;
  //   case "english" : console.log('3rd place');
  //         break;
  //   case "hindi"   : console.log('Number 4');
  //         break;
  //   case "arabic"  : console.log("5th most spoken language");
  //         break;
  //   default     :console.log('Great language too :D');       
  // }

  // CONVERTED TO REGULAR (if) CONDITION;

  if (language === 'chinese' ||language === 'mandarin' ) {
        console.log(`'MOST number of native speakers!'`);
        
  } else if (language === 'spanish') {
          console.log('2nd place in number of native speakers');

  } else if (language === 'english') {
          console.log('3rd place');

  } else if (language === 'hindi') {
          console.log('Number 4');

  } else if (language === 'arabic') {
          console.log("5th most spoken language");

  } else {
          console.log('Great language too :D');
  }
*/

// LECTURE: The Conditional (Ternary) Operator
/*
const age = 23;

age >= 18 ? console.log(`I like to drink juice`):
            console.log(`I like to drink water`);

const drink = age >= 18? "juice" : 'water';       // you can storged 
                                                  // the condiation with var

let drink2;

  if (age >= 18) {
      drink2 = 'juice';
  } else {
      drink2 = 'water';
  }

  console.log(drink2);

  console.log(`I like drink ${drink}`)

  
    //   ------- assignment ---------
let country    = "cairo";
let population = 105e6;

  population > 33e6 ? console.log(`${country}'s is above average'.`)
                    : console.log(`${country}'s population is below average'`);
*/
    
/*--------Challenge #4---------*/
/*
const bill = 430;
const tip  = bill <= 300 && bill >= 50  ?
                  bill * 0.15 :
                  bill * 0.2;

console.log(`The bill was ${bill},the tip was ${tip},
            and the total value ${bill + tip}`);
*/






























