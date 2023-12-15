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

// function calcAverage(score1, score2, score3) {
//     const avgScore = (score1+score2+score3)/3;
//     return (avgScore);
// }
// const dolphinAvg = calcAverage(44,1000,71);
// const koalasAvg = calcAverage(65,54,49);
 
// const checkWinner = function checkWinner(dolphinAvg, koalasAvg) {
//     if (dolphinAvg >= 2 * koalasAvg){
//         console.log(`Dolphins win (${dolphinAvg} vs. ${koalasAvg})!`);
//     }
//     else if (koalasAvg >= 2*dolphinAvg){
//         console.log(`Koalas win (${koalasAvg} vs. ${dolphinAvg})!`);
//     }
//     else{
//         console.log('No team wins...');
//     }
// }
// checkWinner(dolphinAvg, koalasAvg);

// Lesson 36 Array
// const exampleArray = []; -> values inside can be changed even though it is declared as const because array is not primitive, only primitive values are immutable for const.

// Lesson 37 Array methods
//const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
//console.log(friends);
//const newLengthOfArray = friends.push('Jay'); // if store the array methods, it will become the lenght.
//console.log(newLengthOfArray);
//friends.unshift('Alex'); //add element to first position, .pop() -> to remove element, no need to pass in parameters and it will pop from last element.


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// Lesson 40 Dot vs Square Bracket
// dot is used to assess properties, bracket can take in expression.

// Lesson 41 Object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
  
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
  
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
  
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    },
  
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };
  
  console.log(jonas.calcAge());
  
  console.log(jonas.age);
  console.log(jonas.age);
  console.log(jonas.age);
  
  // Challenge
  // "Jonas is a 46-year old teacher, and he has a driver's license"
  console.log(jonas.getSummary());