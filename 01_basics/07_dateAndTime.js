// Dates

let myDate = new Date()

console.log(typeof myDate);  // it will return the type of the variable


console.log(myDate.toString());
console.log(myDate.toDateString());  // it will return the date in string format
console.log(myDate.toTimeString());  // it will return the time in string format
console.log(myDate.toLocaleString());  // it will return the date and time in locale string format
console.log(myDate.toLocaleDateString());  // it will return the date in locale string format
console.log(myDate.toISOString());  // it will return the date in ISO string format
console.log(myDate.toUTCString());  // it will return the date in UTC string format

let myCreatedDate = new Date(2023,0,23,5,3)      // here month is 0 indexed so 0 means january and 1 means february and so on  // 23 is the date and 5 is the hour and 3 is the minute

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("01-14-2023") 
console.log(myCreatedDate1.toLocaleString());



let myTimeStamp = Date.now()  // it will return the current timestamp in milliseconds

console.log(myTimeStamp);  // it will return the current timestamp in milliseconds
console.log(myCreatedDate1.getTime());  // it will return the timestamp of the date in milliseconds
console.log(Math.floor(Date.now() / 1000 ))// it will return the current timestamp in seconds



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  // it will return the current month
console.log(newDate.getDay()); // it will return the current day


newDate.toLocaleString('default',{weekday: "long"}) // it will return the current day in long format
