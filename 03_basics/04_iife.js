// Immediately Invoked Function Expression (IIFE)

//function chai(){
//    console.log(`DB CONNECTED`);
// }
//chai()
// this was of function defining is generally used 



(function chai(){
    console.log(`DB CONNECTED`);
})(); //this semicolon is very importnant to end the iife
// it will give the same output as DB CONNECTED a the previouly defined funxntion
// it is knows as iife way to define a functions which has many advantages 
//To execute code immediately.
// To create a private scope and avoid polluting the global namespace.
// Useful for initialization code or to protect variables from being accessed outside.

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');