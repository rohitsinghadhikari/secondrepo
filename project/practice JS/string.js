name="dom"
age=24

console.log(`My name is ${name} and age ${age}`)

const a=new String ('dom')

console.log(a.__proto__);           // {}
console.log(a.toUpperCase());       // dom
console.log(a.charAt(2));           // h
console.log(a.indexOf('h'));        // 2
console.log(a.substring(0,3));      // do
console.log(a.slice(-4,3));         // oh

b= "  hello  "
console.log(b.trim());              // hello

c="hello/world"
console.log(c.replace('/',' '));       // hello world

console.log(c.includes('wor'));     // true

console.log(c.split('/'));      // [ 'hello', 'world']





