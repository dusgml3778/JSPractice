import _ from './getRandom.js'

const pi = 3.14159265

const str = pi.toFixed(2)

console.log(str)

console.log(typeof str)

console.log(parseInt(str))

console.log(parseFloat(str))

console.log(typeof parseInt(str))

console.log(typeof parseFloat(str))

console.log('abs : ', Math.abs(-12))

console.log('min : ', Math.min(2, 7))

console.log('max :', Math.max(2, 8))

console.log('ceil :', Math.ceil(3.14))

console.log('floor :', Math.floor(3.14))

console.log('round :', Math.round(3.14))

console.log('random :', Math.random())

let val = _.call();

console.log(val)