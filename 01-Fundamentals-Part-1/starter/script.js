let js = "amazing";
console.log(1+1+1);
let firstName = "JingSheng"
console.log(firstName);

// let -> mutable
let javascriptIsFun = true;
console.log(javascriptIsFun);
javascriptIsFun = "becomestring?";
console.log(javascriptIsFun);

// only use const if you are sure that value will not change in the future
// the below code will throw error because const cannot be reassigned (immutable)
// const birthYear = 1991;
// birthYear = 1990;

// the below code will throw error because const needs an initial value
// const birthMonth;

// var is the old way of declaring variable, dont use it now, use let instead
var birthDate = 23;

//operators
const firstName1 = 'Jonas';
const lastName1 = 'Nick';
console.log(firstName1 + " " + lastName1);

let ageJonas = 30;
let ageSarah = 23;
console.log(ageJonas < ageSarah);


// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//solution:
// let height;
// let mass;
// let BMI;
// function CalculateBMI (mass, height){
//     BMI = mass / (height * height);
//     return BMI;
// }

// let markBMI = CalculateBMI(78, 1.69);
// let johnBMI = CalculateBMI(95, 1.88);
// console.log("Mark's BMI = " + markBMI + ", " + "John's BMI = " + johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//Lesson: Strings
let myFirstName = "JingSheng";
const selfIntro = `I'm ${myFirstName}`;  //different symbol, called backticks, found around the tab key. `` can declare a normal string too.
console.log(selfIntro, typeof selfIntro);

//special thing about ``, no need \n\ to make new line
console.log(`This
is
how 
to 
make 
new
lines.`);


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// solution:
// let height;
// let mass;
// let BMI;
// function CalculateBMI (mass, height){
//     BMI = mass / (height * height);
//     return BMI;
// }

// let markBMI = CalculateBMI(78, 1.69);
// let johnBMI = CalculateBMI(95, 1.88);

// if (markBMI > johnBMI)
// {
//     console.log(`Mark's BMI ${(markBMI)} is higher than John's ${(johnBMI)}!`);
// }
// else 
// {
//     console.log(`Mark's BMI ${(markBMI)} is higher than John's ${(johnBMI)}!`);
// }

// Lesson 17 
// type coercion
console.log('I am ' + 23 + ' years old'); // will automatically convert 23 to string for the '+' sign
console.log('23' - '10' - 3); // will automatically convert 23 and 10 to numbers for the '-' sign
// * and / will convert string to numbers also 
let n = '1' + 1; // '11'
n = n - 1; // n -> 10

// Lesson 18
// 5 falsy values: 0, '', undefined, null, NaN, if console.log all these values will return false

// Lesson 19
// "===" means strictly equal, doesnt perform type coercion, always use this to avoid complication
// for eg. '18'=== 18 will return false, one is tring and another is number


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let avgDolphin =  (96 + 108 + 89) / 3;
let avgKoalas =  (96 + 108 + 89) / 3;
if (avgDolphin > avgKoalas) console.log('Dolphins win the trophy 🏆')
else if (avgDolphin === avgKoalas) console.log('Both win the trophy!')
else if (avgKoalas > avgDolphin) console.log('Koalas win the trophy 🏆')

// BONUS 1 & 2
if (avgDolphin > avgKoalas && avgDolphin >= 100) console.log('Dolphins win the trophy 🏆')
else if (avgDolphin === avgKoalas && avgDolphin >= 100 && avgKoalas >= 100) console.log('Both win the trophy!')
else if (avgKoalas > avgDolphin && avgKoalas >= 100) console.log('Koalas win the trophy 🏆')

