
const score = 400;
 const balance = new Number(1000);
 //console.log(score);
 //console.log(balance);
 //+++++ math ++++
// console.log(Math);
 //console.log(Math.PI);
 ///console.log(Math.abs(-7.25));


// console.log(Math.random()); // random number between 0 and 1
//    console.log((Math.random() * 10)+1); // random integer between 1 and 10
  //  console.log(Math.floor(Math.random() * 10) + 1); // random integer between 1 and 10
    const min = 10;
    const max = 20;
  //  console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20
    // date and time
    let date = new Date(); // object hai
   // console.log(date.toString());
let MyCreatedDate = new Date(2023, 5, 15, 10, 30, 0); // year, month (0-11), day, hour, minute, second
//console.log(MyCreatedDate);
let myTimeStamp = Date.now(); // get time in milliseconds since Jan 1, 1970
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // get time in seconds since Jan 1, 2026
