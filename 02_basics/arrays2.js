const marvel_heroes = ["thor" , "ironman" , "hulk"]
const dc_heroes = ["batman" , "superman" , "wonderwoman"]


// marvel_heroes.push(dc_heroes) // Add dc_heroes to the end of marvel_heroes

console.log(marvel_heroes) // ["thor", "ironman", "hulk", ["batman", "superman", "wonderwoman"]]
// console.log(marvel_heroes[3]) // ["batman", "superman", "wonderwoman"]
// console.log(marvel_heroes[3][0]) // "batman"    

const allHeroes = marvel_heroes.concat(dc_heroes) // Add dc_heroes to the end of marvel_heroes returnig a new array
console.log(allHeroes) // ["thor", "ironman", "hulk", "batman", "superman", "wonderwoman"]



// spread operator
const all_new_heros = [...marvel_heroes, ...dc_heroes] // Add dc_heroes to the end of marvel_heroes returnig a new array
console.log(all_new_heros) // ["thor", "ironman", "hulk", "batman", "superman


//

const another_array = [1 , 2 , 3 , [4 , 5 , 6 ] , 7 , [6,7,[4,5]]]

const real_another_array = another_array.flat(  Infinity)

console.log(real_another_array) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



//


console.log(Array.isArray("Hitesh")) // false as it is not an array , it is a string
console.log(Array.from("Hitesh")) // ["H", "i", "t", "e", "s", "h"]  , it converts the string to an array
console.log(Array.from("Hitesh", (x) => x.toUpperCase())) // ["H", "I", "T", "E", "S", "H"]

// interesting case for interview 
console.log(Array.from({name: "hitesh"}))   // []  , as it is not able to convert the object to an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300] , it creates an array of the given elements
