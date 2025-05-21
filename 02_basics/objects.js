// singleton
//Object.create





// object literals

const mySym = Symbol("key1") // symbol is a unique and immutable data type



const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // space is not allowed in the key name
    mySym: "mykey1",
    [mySym]:  "mykey2", // this is how we use symbol in the object  
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays: ["monday", "saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"]) // another way to access the object
// here array ke andar hamne email ko string ke jaise likha kyuki when we were defining it , then automatically it is treated as string "email" = "hitesh@gmail.com"  , it is like that but system knows it ans we write it as email = "hitesh@google.com"
 // if we write console.log(JsUser[email]) , then error will come as output because email is a string which has to be come under ""




// console.log(JsUser.full name]) // error as space is not allowed in the key name 
console.log(JsUser["full name"]) // another way to access the object, this approach works 


console.log(JsUser.mySym) // mykey1
// here it is not used as symbol , it is used as string 
console.log(typeof JsUser.mySym) // string , but it should come symbol to work as symbol 

// to fix this problem we have to put [mySym] = "mykey1" in the object
console.log(JsUser[mySym]) // mykey2
console.log(typeof JsUser[mySym]) // symbol , it is used as symbol


JsUser.email = "hitesh@chatgpt.com" // update the value of email
// Object.freeze(JsUser) // freeze the object so that we cannot change the value of the object
JsUser.email = "hitesh@deekseek.com"
console.log(JsUser.email)  // 
console.log(JsUser) // it will not change the value of email and here we can also see the differecne in symbol and string 


JsUser.greeting = function (){
    console.log("hello js users");
}

// console.log(JsUser.greeting);  // undefind 
console.log(JsUser.greeting()); // hello js users


JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greetingTwo()); // Hello Hitesh