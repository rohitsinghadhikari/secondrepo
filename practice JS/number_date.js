// Number

// const b= 20.5432
// const a = new Number (10)
// console.log(typeof(a.toString()));
// console.log(typeof(a), typeof(b));
// console.log(a.toFixed(4));
// console.log(b.toPrecision(1));
// c=1000000
// console.log(c.toLocaleString('en-IN'));

// Math

// console.log(Math.abs(-4));
// console.log(Math.round(4.4));   // 4,  4.6 --> 5
// console.log(Math.ceil(4.1));    // 5,  4.9 --> 5
// console.log(Math.floor(4.8));   // 4,  4.2 --> 4

// min =10
// max=20
// console.log(Math.floor(Math.random()*10 + 10));

let a= new Date()
// console.log(a.toString());
// console.log(a.toDateString());
// console.log(a.toLocaleString());
// console.log(a.toLocaleDateString());
// console.log(a.toJSON());
// console.log(a.toISOString());
// console.log(a.getTimezoneOffset());

let b= new Date(2022,0,1,7,8)
console.log(b.getTime());

let c=Date.now()
console.log(c);
console.log(a.toLocaleString('default',{
    weekday:"long",
    
}));