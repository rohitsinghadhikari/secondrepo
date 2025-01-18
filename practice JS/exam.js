const a=['rohit','neha','nonu','doggy']

// const b='rohit'
// for (const i of b) {
//     console.log(i);
// }

const m= new Map()
m.set('IN','rohit')
m.set('UK','neha')
// console.log(m);

// for (const [i, j] of m) {
//     console.log(i,j);
// }

// for (const [i,j] in m) {
//     console.log(i,j);
// }

// const game={
//     g1:'nfs',
//     g2:'pop'
// }

// for (const i in game) {
//     console.log(i,game[i])
    
// }

// for (const i in a) {
//     console.log(i,a[i])
// }

// a.forEach(function call (i){
//     console.log(i);
    
// })

// function call (i){
//     console.log(i);
    
// }

// a.forEach(call)

// a.forEach((i,ind,arr)=>{
//     console.log(i,ind);
// })

const b=[
    { name:'rohit', age:18 },
    { name:'neha', age:19 },
    { name:'nonu', age:17 }
]

// b.forEach( (i,ind)=>{
//     console.log(i.name,b[ind].age);
// }
// )

const d=[1,2,3,4,5,6]
// const c=[]
// d.forEach( (i,ind)=>{
//     if(i>3)
//     {
//         c.push(i)
//     }
// }
// )



// const c=b.filter( (i) => i.age === 17)
// const c=b.filter((i) => {return i.age>17})

// const c=d.map((i)=> i+10)

// const c=d.map((i)=> i*3).map((i)=> i+1)

// const c=d.map((i)=> i*10)
//             .map((i)=> i+1)
//             .filter((i)=>i>=41)

const z=0

// const c=d.reduce((i,j)=> i+j,z)

const c=b.reduce ( function (i,j){
    return i+j.name
},z
)
console.log(c)