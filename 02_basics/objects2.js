const tinderUser = new Object()   // singleton object 

const tinderUser2 = {}   // non singleton object
tinderUser2.id = "123abc"
tinderUser2.name = "hitesh"
tinderUser2.isLoggedIn = false


console.log(tinderUser) // empty object
console.log(tinderUser2) // empty object


const regluarUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
    }
}

console.log(regluarUser.fullname.userfullname.firstName) // object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1 , obj2 } 
console.log(obj3) // { obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'a', 4: 'b' } }
// here we are creating an object which has two objects inside it
//
const obj4 = Object.assign({}, obj1, obj2) // here we are creating an object which has two objects inside it
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// here we are creating an object which has two objects inside it

// here we can ignore the usage of {} in , const obj4 = Object.assign({}, obj1, obj2)   ,  but it is said that it is good to use this way



const obj5 = {...obj1, ...obj2} // here we are creating an object which has two objects inside it   
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
// here we are creating an object which has two objects inside it



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users.map((user) => {
    console.log(user.email)
}
)
// here we are creating an object which has two objects inside it



console.log(tinderUser2)
console.log(Object.keys(tinderUser2)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser2)) // [ '123abc', 'hitesh', false ]
console.log(Object.entries(tinderUser2)) // [ [ 'id', '123abc' ], [ 'name', 'hitesh' ], [ 'isLoggedIn', false ] ]   


console.log(tinderUser2.hasOwnProperty("id")) // true
console.log(tinderUser2.hasOwnProperty("id1")) // false
console.log(tinderUser2.isLoggedIn) // false




// Object Destructuring

const cource = {
    courcename: "js in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

// cource.courceInstructor

const {courceInstructor} = cource

console.log(courceInstructor);
 


