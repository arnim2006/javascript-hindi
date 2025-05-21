const myArr = [0, 1,2, 3, 4, 5];
const myHeroes = ['Batman', 'Superman', 'Wonder' ]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2)

// Array methods

myArr.push(6) // Add to the end
console.log(myArr) // [0, 1, 2, 3, 4, 5, 6]
myArr.pop() // Remove from the end
console.log(myArr) // [0, 1, 2, 3, 4, 5]
myArr.unshift(-1) // Add to the beginning
console.log(myArr) // [-1, 0, 1, 2, 3, 4, 5]
myArr.shift() // Remove from the beginning
console.log(myArr) // [0, 1, 2, 3, 4, 5]

myArr.splice(2, 1) // Remove 1 element at index 2
console.log(myArr) // [0, 1, 3, 4, 5]
myArr.splice(2, 0, 2) // Add 2 at index 2
console.log(myArr) // [0, 1, 2, 3, 4, 5]
myArr.splice(2, 1, 2) // Replace 1 element at index 2 with 2
console.log(myArr) // [0, 1, 2, 3, 4, 5]

console.log(myArr.includes(2)) // Check if 2 is in the array    
console.log(myArr.indexOf(2)) // Get index of 2 
console.log(myArr.lastIndexOf(2)) // Get last index of 2

const newArr = myArr.join()
console.log(newArr) // Convert array to string

const newArr2 = myArr.join(' ')
console.log(newArr2) // Convert array to string with space
const newArr3 = myArr.join('-')
console.log(newArr3) // Convert array to string with -

// slice ,splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // Get elements from index 1 to 3 (not included)
console.log("B ", myn1); // [1, 2]
const myn2 = myArr.slice(1) // Get elements from index 1 to end


const myn3 = myArr.slice(-2) // Get last 2 elements
console.log("C ", myn3); // [4, 5]
const myn4 = myArr.slice(-2, -1) // Get last 2 elements
console.log("D ", myn4); // [4]

const myn5 = myArr.splice(1,3) // Remove 3 elements from index 1
console.log("E ", myn5); // [1, 2, 3]
console.log("F ", myArr); // [0, 4, 5]


