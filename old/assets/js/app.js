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
