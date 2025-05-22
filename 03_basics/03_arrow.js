const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);          // this keyword is used for current context , it can omly be used in objects , not in functions 
        
    }


}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()           // idhar contxt change hogaya hai ,as sam is now the username so it will be printed , here 'this' keyword is used 


//const chai = function (){
  //  let username = "hitesh"
    //console.log(this);
//}


const chai = () => {
    let username = "hitesh"
    console.log(this)
}

// chai()






// () => {}

// const  addTwo = (num1,num2) =>{
 //   return num1+num2
// }

// console.log(addTwo(3,4))





// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(3,4))


// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4))


const addTwo = (num1,num2) => {username: "hitesh"}                     
console.log(addTwo(3,4))
// undefined 

const addTwoo = (num1,num2) =>( {username: "hitesh"} )                    
console.log(addTwo(3,4))
// it will run now as object is wrapped in a parenthesis now 


