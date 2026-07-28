// function++++++
function greet() {
   // console.log("Hello, World!");
    // console.log("Welcome to the function demonstration.");
}
    greet()
function add(a,b){
    return a + b;
}
const result = add(5, 3);
//console.log("result: " + result);

function loginusermessage(username) {
    if (!username) {
        return "Please provide a username";
    }
    return`${username} just logged in`
}

// console.log(loginusermessage("deepak"))
console.log(loginusermessage()) // undefined k sath print hoga kyuki humne username pass nhi kiya