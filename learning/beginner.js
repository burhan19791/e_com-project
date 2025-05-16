

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
string: "hello"
number: 12, 3.14
object: { key: "value" }
array: [1, 2, 3]
boolean: true, false
null: intentionally empty
undefined: declared but not assigned
 */
// ////////////////////////////////
typeof "hello"; // "string"
console.log('typeof "hello"', typeof "hello"); // string
typeof 123; // "number"
console.log("typeof 123", typeof 123); // number
typeof true; // "boolean"
console.log("typeof true;", typeof true); // boolean
typeof {}; // "object"
console.log("typeof {}", typeof {}); //object
typeof []; // "object"  ! (Arrays are objects)
console.log("typeof []", typeof []); // object
typeof null; // "object"  ! (quirky bug in JS)
console.log("typeof null", typeof null); // object
typeof undefined; // "undefined"
console.log("typeof undefined", typeof undefined); // undefined
typeof function () {}; // "function"
console.log("typeof function () {}", typeof function () {}); // function
// ////////////////////////////////////////
/*
Array.isArray([]); // true
Array.isArray({}); // false
[] instanceof Array;        // true
{} instanceof Object;       // true
new Date() instanceof Date; // true
*/
// /////////////////////////////////////
console.log("*****");
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray({}): ", Array.isArray({})); // false
console.log("[] instanceof Array: ", [] instanceof Array); // true
console.log("{} instanceof Object: ", {} instanceof Object); // true
console.log("new Date() instanceof Date: ", new Date() instanceof Date); // true

// ////////////////////////////////////
console.log("**********************************************************************");
/*
const toyoraCar = {
  brand: "Toyota",
  model: "Corolla",
  start: function () {
    console.log("Engine started");
  },
};
console.log(toyoraCar);
*/
/*
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.start = () => {
      console.log(`${this.brand} ${this.model} is starting`);
    };
  }
}
const myCar = new Car("Toyota", "Corolla");
myCar.start();
console.log(myCar);
*/
/*
class DateInfo {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
  getYear() {
    return this.year;
  }
  getFormattedDate() {
    const d = String(this.day).padStart(2, "0");
    const m = String(this.month).padStart(2, "0");
    return `${d}/${m}/${this.year}`;
  }
  isLeapYear() {
    const y = this.year;
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }
}
*/
// something = "something";
// console.log(something);

// let age;
// console.log("age is declared/defined as uninitialized is: ", age);

let age = 14;
console.log("age now is initialed with: ", age);

age = 47;
console.log("age now is assigned with: ", age);

const name = "burhan";

const price = "feefteen";
const taxRate = 0.05;
const tax = price * taxRate;
console.log("tax is : ", tax);

// javascript is not stongly typed
// java is a stongly type language
// typescript is strongly typed

function abc() {
  var something = "something";
  var something = "something";
}

console.log("***************************************************************");

/*
// var is an keyword to define a variable
// name is variable name
// = is called assignment
// 20 is value, value can be of type string, number, object, array, function
// an array can be of type string, number, object, array, function
// assignment has no output
var name = "Burhan Ali Shah"; // type string
var age = 20; // type number
var employee1 = { name: "ali" }; // type object
var friends = ["ahmed", "ali", "usama"]; // type array of string type
var friendsWithDetail = [{ name: "usama," }, { name: "maali," }]; // type array of object type
//
//
console.log("name is: ", name);
console.log("age is: ", age);
console.log("employee1 is: ", employee1);
console.log("friends is: ", friends);
console.log("friendsWithDetail is: ", friendsWithDetail);
//
//
// definition of functions
// function is perform an operation, calculation, processing
// function is a keyword
// add is a name of function
// () paramerters or lets say inputs of function
// {} is function block, where you define/write/program a function
// return always not necessary, but can return string, number, object, arrau, or function
function add(operand1, operand2) {
  var result = operand1 + operand2;
  return result;
}
// return always not necessary;
function print(string) {
  console.log("string is: ", string);
}
// add(2, 2) // is called function invocation
var sum = add(2, 2);
print("my name is zaka");
//empty function with no return value
function greet() {
  console.log("Good Morning");
}
*/
