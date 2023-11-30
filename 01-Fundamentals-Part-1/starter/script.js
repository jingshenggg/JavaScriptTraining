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