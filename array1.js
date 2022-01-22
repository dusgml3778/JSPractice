const numbers = [1, 2, 3, 4]

const fruits = ['Apple', 'Banana', 'Cherry']

//map of array
const a = numbers.map(num => {

  return num < 3
})

// const a = numbers.map(num => num < 3)

console.log(a)

//filter of array

const b = numbers.filter(num => {

  return num < 3
})

console.log(b)

console.log(numbers)

// find of array

const c = fruits.find(fruit => /^B/.test(fruit))

console.log(c)

const d = fruits.findIndex(fruit => /^C/.test(fruit))

console.log(d)

// include of array

const e = fruits.includes(3)
console.log(e)

// push of array * changed original array

// insert to first index
numbers.push(5)

console.log(numbers)

// insert to last index
numbers.unshift(0)

console.log(numbers)

// reverse of array

numbers.reverse()

console.log(numbers)

// splice of array splice(index,to delete item )

numbers.splice(2, 1)

console.log(numbers)

// numbers.splice(2,1,999)

// console.log(numbers)

numbers.splice(2,0,999)

console.log(numbers)

fruits.splice(2,0,'orange')

console.log(fruits)