'use strict';

// Lesson 30 & 31
// Function declaration -> can call the function before defining it
// function calculateAge (birthYear){
//     return 2037 - birthYear
// } 
// Function expression
// const calculateAge = function (birthYear){
//     return 2037 - birthYear
// }  //eg of writing fucntion as expression

// const age = calculateAge(1991);
// console.log(age);

// // Lesson 32 Arrow Function, exellent for one-liner function
// const calcAge = birthYear => 2037 - birthYear;
// const calculateAge1 = calcAge(1993);
// console.log(calculateAge1);

// more than one line of code
// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
//   }

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

function calcAverage(score1, score2, score3) {
    const avgScore = (score1+score2+score3)/3;
    return (avgScore);
}
const dolphinAvg = calcAverage(44,1000,71);
const koalasAvg = calcAverage(65,54,49);
 
const checkWinner = function checkWinner(dolphinAvg, koalasAvg) {
    if (dolphinAvg >= 2 * koalasAvg){
        console.log(`Dolphins win (${dolphinAvg} vs. ${koalasAvg})!`);
    }
    else if (koalasAvg >= 2*dolphinAvg){
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinAvg})!`);
    }
    else{
        console.log('No team wins...');
    }
}
checkWinner(dolphinAvg, koalasAvg);

// Lesson 36 Array
// const exampleArray = []; -> values inside can be changed even though it is declared as const because array is not primitive, only primitive values are immutable for const.

