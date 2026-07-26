
const obj = new Object(); //  create a singleton object
//const obj = {} // create a singleton object using object literal syntax that means non singleton object
obj.name = "deepak"
obj.id ="abac123"
obj.email = "ashs@example.com"
//console.log(obj); 

const regularuser = {
    email: "regularuser@example.com",
    fullname: {
        firstname: "deepak",
        lastname: "kumar"
    }
}
//console.log(regularuser.fullname.firstname) // access nested object property
const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {7: "seven", 8: "eight", 9: "nine"}

const obj3 = {...obj1, ...obj2} // merge two objects with spread operator
//console.log(obj3)


const user = [
    {
        id: 1,
        name: "deepak",
        email: "deepak@example.com"
    }, 
    {
        id: 2,
        name: "john",
        email: "john@example.com"
    }
]
user[1].name
// console.log(obj)

// console.log(Object.keys(obj)) // return array of keys // important hai
// console.log(Object.values(obj)) // return array of values // important hai
// console.log(Object.entries(obj)) // return array of key value pairs // important hai

const course = {
    name: "javascript",
    price: 999,
    courseInstructor: "deepak",
    courseDuration: "3 months"
}
// console.log(course.courseInstructor) // access object property
// course.courseInstructor = "john" // update object property
 //console.log(course.courseInstructor) // access updated object property
const {price: yadav} = course // object destructuring and renaming the property name
//console.log(price)
console.log(yadav) // access object property using destructuring
