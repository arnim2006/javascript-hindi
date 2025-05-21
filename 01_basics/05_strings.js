const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value")  // output = hitesh50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)       // string interpolation

const gameName = new String('hitesh-hc')

console.log(gameName[0]); // output = h // dont confuse it with that string is array , basically it is OBJECT type and indexes and vakues are key value pairs of each other 
console.log(gameName.__proto__);  //output = {}

console.log(gameName.length);
console.log(gameName.toLowerCase());   // here our string willbe converted into lower case but we have studied that it has not chnaged the original vaueof the strig and but it has changed the copy of the string because it is using the stack storage as it is orimitve dattatype
//console.log(gameName.charAt());  // charAt will tell us ki konse index pe konsa character hai  
console.log(gameName.charAt(2));  
console.log(gameName.indexOf('t'));   // kosna character konsi position pe aa raha hai 


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)  // slice will also work same as substring but it will also work with negative index
console.log(anotherString);  // output = hite
console.log(gameName.slice(-2));  // output = hc
console.log(gameName.slice(0, -2));  // output = hitesh-
console.log(gameName.slice(2, -2));  // output = tesh-
console.log(gameName.slice(-8, 4));  // output = ite

const newStringOne = "   hitesh   "
console.log(newStringOne);  
console.log(newStringOne.trim());  // trim will remove the spaces from the start and end of the string

// trim will not remove the spaces from the middle of the string
// trim only works on white spaces and line terminators


const url = "https://www.hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "-") ) // it will not change the original value of the string

console.log(url.includes("hitesh"))  // it will check if the string is present in the url or not

console.log(gameName.split("-"))  // it will split the string into an array of strings , here it is splitted on the basis of "-"
console.log(gameName.split(""));  // it will split the string into an array of characters

