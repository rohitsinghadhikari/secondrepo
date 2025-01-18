// function aA(a,b){
//    // console.log(a+b)
//     return a+b
// }

// // const res = aA(3,4)

// function login(uname){
//     if(uname===undefined){
//         console.log('enter uname')
//         return
//     }
//     return `${uname} logged in`
// }
// res=login('rohit')
// console.log(res)

// res1=login()
// console.log(res1)

// function calcPrice(...n1){
//     return n1

// }

// console.log(calcPrice(200,400,500));


// aA={
//     uname:'rohit',
//     age:20
// }

// function obj(a){
//     console.log(`hi ${a.uname}, of ${20} yrs`)
// }

// obj(aA)
// obj({
//     uname:'neha', age:19
// })

// const b=[1,2,3,4]

// function arr (c){
//         return c[3]
//     }

// console.log(arr(b))
// console.log(arr([6,7,8,9]))


// const user={
//     uname: 'rohit',
//     cost:100,
//     msg: function(){
//         console.log(`hello ${this.uname}`);
//         console.log(this)
//     }
// }
// user.msg()

// function a(){
//     console.log(this)
// }

// a()

// const aA= () => {
//     let a=23
//     console.log(this.a);   
// }
// aA()

const a=(n1,n2)=>n1+n2
console.log(a(2,2));
