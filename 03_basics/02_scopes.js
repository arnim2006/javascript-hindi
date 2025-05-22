let a = 10
const b = 20
var c = 30

 function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)

    two()
 }

 one()



 if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username+website);
    }
    console.log(website);
 }

 console.log(username);




 // +++++++++++++++++++ INTERESTING+++++++++++++++++++

 function addOne(num){
    return num +1
 }

 addOne(5)


 const addTwo = function(num){
    return num+2
 }

 addTwo(5)
 