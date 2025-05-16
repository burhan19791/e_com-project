/*
let theName = "burhan";
// theName = "zaka";
function print(name, age) {
  console.log("i am inside function, name is: ", name, " age is: ", age);
}
function printAgain(name, age) {
  console.log("i am inside function, name is: ", name, " age is: ", age);
}
let name = "zaka";
let age = 43;
print(age, name);
console.log("outside function");
*/

function sum(a, b) {
  return a + b;
}
// const total = sum(4, 6, 5);
const arr = [1, 2, 3, 4];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
printt("sum is: ", sum(4, 6), " product is: ", 4 * 10);
printt("zaka");

function printt(...params) {
  for (let index = 0; index < params.length; index++) {
    const element = params[index];
  }
  //   console.log('parameter at index [0] is" ', params[0]);
  //   console.log('parameter at index [1] is" ', params[1]);
  //   console.log('parameter at index [2] is" ', params[2]);
  //   console.log('parameter at index [3] is" ', params[3]);
}

/*
operators
*
arithmatic operators
+ - * /
unary operators
++ +1
-- -1
assignments operator
=
+=
-=

comparison operators 
>   8 > 7  = true
<   8 < 7  = false
>=  8 >= 8 = true
<=  8 <= 7 = false
==  8 == 8 = true
!=  7 != 7  = false
=== strict
!== strict

logical operators
&& binary
true  && true   = true
8 > 7 && 8 >= 8 = true
false && false = false
false && true = false
true && false = false
|| binary
true && true = true
false && false = false
false && true = true
true && false = true

!  unary (boolean)
!true = false
!false = true

true && true && false 
!(!(8 <= 7) && 8 == 8) && !(7 != 7)
!(true && true) && true
false && true

*/

/**
0. for loop
1. value and reference
2. lexical scope
3. premitives and objects
3. spread operator

 */
