
// primitive data types=> value ka copy banta hai
// 7 types of primitive data types in JavaScript
// string, number, boolean, null, undefined, symbol, bigint
// non-primitive data types=> value ka reference banta hai
// non-primitive data types in JavaScript=> object, array, function
const arr = [1, 2, 3, 4, 5];
const obj = { name: "deepak", age: 22, city: "delhi" };
const func = function () {
  console.log("hello");
};
// stack memory=> primitive data types store in stack memory
// heap memory=> non-primitive data types store in heap memory
let user = {
  email: "deepak@example.com",
  age: 22
}
let user2 = user; // reference copy
user2.email = " ad@gmail.com"
console.log(user.email); //
console.log(user2.email); //