const accountId = 144553                       // we cannot change the value assigned in const keyword
let accountEmail = "arnim@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// now for contants we use const command nad for variables we used to use two commands which is let and var , but we dos use var because it is very bad if we talk about the scope of a variable , suppose there is a if{} loop and we used the same variable name inside hte if loop that we used outside it and changed some values in it then the value of thst variable will be change in the outside also , it is the problem with var variable thats why we use let command only 

// now here we have declared a variable wihtout using nay command , we can do it in javascript but we dont do it 

accountEmail = "something@gh.com"
accountPassword = "696969"
accountCity = "manali"

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ])  // short method to print all the things together in tabular format


// analyse the output 


