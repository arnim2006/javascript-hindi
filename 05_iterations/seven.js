const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// saare numbers pe 10 add karna hai 

// const newNums = myNumers.map( (num) => { return num + 10})

// chaining the map and filter methods
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);              // [41, 51, 61, 71, 81, 91, 101, 111, 121, 131]