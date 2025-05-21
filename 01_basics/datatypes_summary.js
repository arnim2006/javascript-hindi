// kis tarah data ko memeory m rakh jaata hai aur access kiya jaata hai uske basis m there are 2 types of data types

// primitive (call by value ) datatype :
// 7 categories : String, Number,Boolean,null,undefined,symbol(kisi value ko unique banane ke liye symbol use kia jaata hai), BigInt (scientific values jo hanle nahi hor ahi h vo usme aati hai)



// Non primitive or refrence type :
// array,objects,functions 

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

// now the output for this will be FALSE , though we have given the same value of symbol to both of them , but they both will be unique 

const bigNumber = 2733332823
// const bigNumber = 89294797492738294738473  if such a large number comes then it will not be stores in big int so we can do const bigNumber = 9483209840240329n , here because of n it will be converted to big int 

//arrays
const heros = ["shaktiman", "naagraj", "doga"]




// objects
let myObj = {
   name: "hitesh",
   age: 22,
}

//function
const myfunction = function(){
   console.timeLog("hello world");
}

console.log(typeof bigNumber); // output = undefined 
const outsideTemp = null
console.log(typeof outsideTemp); //output = object

console.log(typeof scoreValue); // output = number
console.log(typeof myfunction); //output = function


// ++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memory : 1. stack(primitve datatypes m stack memery use hti hai ) and 2. heap(non primitive datatype m head memeory use hoti hai )

let myYoutubename = "hiteshchaudharycom"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename); // hiteshchaudharycom
console.log(anothername);  //chaiaurcode

// NOW IT WAS THE EXAMPLE OF PRIMITVE DATA TYPE SO STACK MEMEORY WILL BE USER HERE , NOW IN STACK MEMORY , here we have assigned the value 0f one variable which is dependent on another variable but when we change the variable then the refrence variable willl not change as we can see the output it is because , if we change the variable then the copy of reference variable is changed not the original veriable 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@googl.com"


console.log(userOne.email);  //output = hitesh@googl.com
console.log(userTwo.email);  //output = hitesh@googl.com



// NOW IT WAS THE NON PRIMITVE DATA TYPE AND HERE HEAPS WILL BE USED SO , HERE WE WILL CHANGE THE NEW VARUBALE THEN THE REFRENCE VARIABLE WILL ALSO BE CHANGED AND FOR MORE INFORMATION WATCH THE VIDEO ONCE AGAIN 
