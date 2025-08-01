//primitive --> primitives give you real copy
//--> String, number, Boolean, int, bigint, String, null
//reference--> if you are looking at functions, arrays or objects these are references to the parent.

let a = 12
let b = a //--> you get the real copy for a i.e b holds its own copy and a holds it own

let arr = [1,4,6]
let arr2 = arr //--> you will get the reference copy, any changes made in arr will also reflect in arr2 and vice versa

//--> data wrapped in " ",' ',` ` is string
//--> integers or floats are numbers
//--> bool are TRUE and FALSE
//--> NULL means you didn't give any values knowingly
//-->Undefined means you didn't gave any values to variable(not even null) so the given by default is Undefined
let totalMembers = null 
let undefi
console.log(undefi)

let obj = {
    name: 'Trolley',
    size: 15,
    company: 'Razzaq agri'
}

let obj2 = obj //beacause objects are referenced, any changes in obj2 will also reflect in obj and vice verse.

obj2.name = 'Thresher'

console.log(obj) 
console.log(obj2)
// type coercion
console.log('Rescue'+1122)
console.log(1122+'rescue')
console.log('4'+4)
console.log(4 + '4')
console.log('4'+'4')

//truthy & falsy
// 0, false, NaN, document.all, "" all these are falsy values (!!0) to check if it truthy or falsy

console.log(!!NaN)

if(NaN) {
    console.log('Run me if NaN proves to be true (which it will never be)')
}
else {
    console.log('NaN is false')
}