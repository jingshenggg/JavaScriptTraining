'use strict';

// Lesson 30 & 31
// Function declaration -> can call the function before defining it
function calculateAge (birthYear){
    return 2037 - birthYear
} 
// Function expression
// const calculateAge = function (birthYear){
//     return 2037 - birthYear
// }  //eg of writing fucntion as expression

const age = calculateAge(1991);
console.log(age);

// Lesson 32 Arrow Function, exellent for one-liner function
const calcAge = birthYear => 2037 - birthYear;
const calculateAge1 = calcAge(1993);
console.log(calculateAge1);

// more than one line of code
const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }