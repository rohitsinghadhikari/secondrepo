// const a= [1,2,3,4,5,6]

// const b = a.slice(1,4)
// console.log(a);
// console.log(b);

// const c = a.splice(1,4)
// console.log(a);
// console.log(c);


const a=["hi", "hello", "hola"]
const b=["bye", "byee"]
c=a.concat(b)
console.log(c)
const d=[...a,...b]
console.log(d)

e=[1,2,[3,4],[5,[6,7]]]

const f=e.flat(1)
console.log(f)
