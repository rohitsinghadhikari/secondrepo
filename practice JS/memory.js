// stack - primitive values

let a="hello" // value of a is stored in stack
let b=a  // copy of a is given to b

console.log(a)
console.log(b)

b="bye" // copy given to b is modified

console.log(a)
console.log(b)

// heap -non primitive values

let a1={            
    email : "abc",
    city : "bel"
}                   // value of a1 is stored in heap

let b1=a1           // reference of value is given to b1

console.log(a1)
console.log(b1)

b1.email="def"      // original value is changed as ref was given

console.log(a1)
console.log(b1)