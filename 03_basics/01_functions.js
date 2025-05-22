

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");    
console.log("E");
console.log("S");
console.log("H");
}

sayMyName()
// sayMyName is refrence and parenthesis is execution

sayMyName // here output will be nothing because its just the refrence


function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
const result = addTwoNumbers(2, 3) // here we are passing the values to the function
console.log("Result: ", result) // here we are printing the result
// output will be undefined because we are not returning anything from the function
// if we want to return the value from the function we have to use return keyword


function addTwoNumbers(num1, num2){
    return num1 + num2
    console.log(num1 + num2) // this line will not be executed because return statement will exit the function
}


const result2 = addTwoNumbers(2, 3) // here we are passing the values to the function
console.log("Result: ", result2) // here we are printing the result
// output will be 5 because we are returning the value from the function
//




function loginUserMessage(username){
    if(username === undefined){
       console.log("please enter a username")
         return
    }
    return `${username} just logged in`            // we case use  :   username + " just logged in"  also
}


console.log(loginUserMessage("Hitesh"))

console.log(loginUserMessage()) // output will be : undefined just logged in






function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));

function interview(val1,val2, ...num1){
    return num1;
}
console.log(interview(300,400,200,100))
// 300 and 400 are taken by val1 and val2










const user = {
    username: "Hitesh",
    price: 199

}

function handleObject(anyobject)
{
  console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

handleObject(user)


// we can directly pass the object to the function
handleObject({
    username: "sam",
    price: 399
})




const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // here we are passing the array to the function

