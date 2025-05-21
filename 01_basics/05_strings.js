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

