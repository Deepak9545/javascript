
function one(){
    const username = "John";

    function two(){
        const website = "example.com";
      //  console.log(username);

}
//console.log(website); // ReferenceError: website is not defined
two()
}
one() 

//+++++++

function addone(num){
    return num + 1;
}
addone(5); // 6


const addtwo = function(num){
    return num + 2;
}
addtwo(5); // 7 hoisting is not applicable to function expressions

// ++++++ arrow function

const user = {
    username: "deepak",
    price: 200,
    welcomeMessage: function(){
        console.log(`Welcome, ${this.username}!`);
      //  console.log(this); context of this is user object
    }
}
// user.welcomeMessage()
// user.username = "ad"
// user.welcomeMessage()
//console.log(this); returns window object in browser and empty object in nodejs
    
// function chai(){
//     let username = "deepak";
//     console.log(this.username); // undefined this method is not available in function scope it works in object scope
// }
// chai() // undefined


// arrow function does not have its own this value, it uses the this value from the enclosing lexical context

const chai = () => {
    let username = "deepak";
    console.log(this.username); // undefined this method is not available in function scope it works in object scope
console.log(this); // returns window object in browser and empty object in nodejs
}
// chai() // undefined
// const add = (a, b) => {
//     return a + b;
// }
//const add = (a, b) => a + b;  // implicit return mtlb return statement likhne ki jarurat nahi hai
   //const add = (a, b) => (a + b); // agar a + b ko curley{} me likha to iska matlab hai ki ye expression hai aur iska return keyword likhna padhega
 const add = (a, b) =>( {username: "deepak"}); // object return karne ke liye curley{} ka use kiya hai aur parenthesis() ka use kiya hai taki javascript ko ye samajh me aaye ki ye object hai aur iska return keyword likhne ki jarurat nahi hai


 //console.log(add(5, 3)); // 