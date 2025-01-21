
// object literal

const sy = Symbol("k1")

const aJ = {
    name: "dom",
    age: 18,
    loc: "domy rep ju",
    mail: "abc",
    isLogin: false,
    lastlogin: ["Mon", "Sat"],
    "company": "xyz boom",
    "emp id": 123,
    ssy: "key1",
    [sy]:"key2"

}

// console.log(aJ.name);
// console.log(aJ["age"]);
// console.log(aJ.loc);
// console.log(aJ.company);
// console.log(aJ["emp id"]);
// console.log(aJ.ssy, typeof aJ.ssy);
// console.log(aJ[sy], typeof aJ[sy]);

// aJ.mail="def"
// Object.freeze(aJ)
// aJ.name="mod"
// console.log(aJ)

// aJ.greet=function() {
//     console.log("hello");
// }

// aJ.greet1=function() {
//     console.log(`hello ${this.name}`);
// }
// console.log(aJ.greet);
// console.log(aJ.greet());
// console.log(aJ["greet"]);
// console.log(aJ.greet1());
// console.log(aJ)

// singleton
// const aK= new Object()

// const aL={}

// aL.name="mod"
// aL.age=18
// aL.mail="sdf"
// console.log(aL)

// const aZ= {
//     mail: "xyz",
//     name: {
//         uname :{
//             fname: "dom",
//             lname: "odm"
//         }
//     }
// }

// console.log(aZ.name)
// console.log(aZ.name.uname)
// console.log(aZ.name.uname.lname)

// const a1={1:'a',2:'b'}
// const a2={3:'a',4:'b'}
// const a3= {a1,a2}
// console.log(a3)
// const a4=Object.assign(a1,a2)
// const a5=Object.assign({}, a1,a2)
// console.log(a4)
// console.log(a5)

const a =[
    {
        id:1,
        mail:'abc'
    },
    {
        id:2,
        mail:'xyz'
    }
]

console.log(a[0].mail)

// console.log(Object.keys(a1))
// console.log(Object.values(a1))
// console.log(Object.entries(a1))
// console.log(a1.hasOwnProperty('2'))

// const crs={
//     name:"exercise",
//     cost: 100,
//     inst:"dom"
// }

// const {inst} = crs
// console.log(inst)

// const {inst: i} = crs
// console.log(i)
