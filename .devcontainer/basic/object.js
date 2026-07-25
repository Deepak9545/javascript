
// object literal

const Mysym = Symbol("key1");
const person ={
    name: "deepak",
    [Mysym]: "mykey1",
    age:20,
    add: "ballia",
    "full name": "deepak kumar",
    email:"deepak@example.com"
}
// console.log(person["full name"]); // access property with big bracket because we cant access dot property
// console.log(person.name);
// console.log(person.age);
// console.log(person.add);
// console.log(person["add"]);

// person.add = "delhi" // update property
// Object.freeze(person) // freeze object property
// person.add = "mumbai" // update property
// console.log(person); 


person.greeting = function(){
    console.log("hello");
}
person.greetingTwo = function(){
    console.log(`hello deepak ${this.age} ${this.add} ${this.email}`); // this keyword is used to access the property of object
}

console.log(person.greeting()); // access method
console.log(person.greetingTwo()); // access method