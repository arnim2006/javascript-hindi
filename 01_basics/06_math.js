const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());  // it will convert the number into string
console.log(balance.toString().length);  
console.log(balance.toString(2));  // it will convert the number into binary string
console.log(balance.toString(8));  // it will convert the number into octal string

console.log(balance.toFixed(2));  // it will convert the number into fixed point notation
console.log(balance.toExponential(1));  // it will convert the number into exponential notation
console.log(balance.toPrecision(2));  // it will convert the number into fixed point notation with specified precision
console.log(balance.toLocaleString());  // it will convert the number into locale string

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); 

const num = 123.8966
console.log(num.toPrecision(3));

const num2 = 1123.8966
console.log(num2.toPrecision(3));  // it will convert the number into fixed point notation with specified precision


const hundreds = 1000000
console.log(hundreds.toLocaleString());  // it will convert the number into locale string  // americal format 
console.log(hundreds.toLocaleString('en-IN'));  // it will convert the number into locale string with specified locale (indian format)
console.log(hundreds.toLocaleString('en-IN', {style: 'currency', currency: 'INR'}));  // it will convert the number into locale string with specified locale and currency


// ++++++++++++++++++++Maths +++++++++++++++++++++++++++++++++++++++++++++++


console.log(Maths);
console.log(Math.abs(-4));  // it will return the absolute value of the number
console.log(Math.ceil(4.2));  // it will return the smallest integer greater than or equal to the number
console.log(Math.floor(4.8));  // it will return the largest integer less than or equal to the number
console.log(Math.round(4.5));  // it will return the value of the number rounded to the nearest integer
console.log(Math.max(4, 5, 6, 7, 8));  // it will return the largest number from the given numbers
console.log(Math.min(4, 5, 6, 7, 8));  // it will return the smallest number from the given numbers
console.log(Math.random());  // it will return a random number between 0 and 1
console.log(Math.random() * 10);  // it will return a random number between 0 and 10



const min = 10
const max = 20

Math.random() * (max - min) + min  // it will return a random number between min and max
console.log(Math.floor(Math.random() * (max - min) + min));  // it will return a random number between min and max
console.log(Math.floor(Math.random() * (max - min + 1) + min));  // it will return a random number between min and max including min and max

