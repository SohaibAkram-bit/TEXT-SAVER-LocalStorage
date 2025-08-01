//  /*var is a function scoped variable
// it is attached to window(i.e global object)*/
// var global = 13; //var does not respect the block

//   "Thirteen"; /*var did not give error on double initialization but let does */
// function globalCheck() {
//   var global = 19;
//   return global;
// }
// console.log(global);
// let x = globalCheck();
// console.log(x);

// let num = 13; /*attached to window*/
// var number = "Good"; /*attached to window*/
// function checkLet() {
//   let member = 13;
//   return number;
// }

// let y = checkLet();
// console.log(num);
// console.log(y);

// /* const values can't be overwritten */

// const pi = 3.1416;
// // pi = 4 gives error
// // var a = 12

// /*-->Scope can be GLOBAL,BLOCK AND FUNCTIONAL */

// function checknum() {
//     return num
// }
// let numCheck = checknum()
// console.log(numCheck)
// // global is the variable that is not in function


// // console.log(hoist)

// // let hoist = 'Hoist'
// // when a variable is made in js it is broken into two parts, declaration part goes up and initialization comes down
// //let --> hoisting can be done and the variable is in temporal dead zone
// //var --> hoisting can be done and the variable value is set to be undefined 

var myage = 23
function myAge() {
    var myage = 34 //inside function variable
    return myage
}
console.log(myage)
let z = myAge()
console.log(z)

console.log('Updated')
console.log(myage)
console.log(z)