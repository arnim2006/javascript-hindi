let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   // for 33abc the output will come NaN, FOR  NULL THE OUTPUT WILL COME 0 , FOR UNDEIFNED THE output will come NaN , for TRUE boolean value the output will come 1 and 0 for FALSE .

let isLoggedIn = 1   // isme agar ham log koi bhi random string de denge jab bhi output true hee ayega ua agar hamne blank space chhod dia toh output false ayega 


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)