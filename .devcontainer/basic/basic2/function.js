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
// console.log(loginusermessage()) // undefined k sath print hoga kyuki humne username pass nhi kiya

function calculate( val1,val2,...nums1) // rest operator
{ 
    return nums1
}
//console.log(calculate(200,300,400,500))

const user = {
    Username: "deepak",
    price: 200
}
function handleobj(anyobject){
    console.log(`username is ${anyobject.Username} and price is ${anyobject.price}`)

}
//handleobj(user)
// direct object bhi pass lr sakte hai array bhi
handleobj({
    Username: "ad",

    price: 500
})

const array = [200,300,400,500]
 
function returnvalue(getarray){
    return getarray[1]
}
console.log(array)
console.log(returnvalue(array))
console.log(returnvalue[200,300,400])
