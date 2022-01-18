//look for Array mdn

const numbers = [1, 2, 3, 4]

const fruits = ['apple', 'banana', 'orange']

// index starts from zero
console.log(numbers[1])

console.log(fruits[2])

// find function
const find = numbers.find(el => el > 2);

console.log(find)

// concat function
// original array is not changed
console.log(numbers.concat(fruits))

fruits.forEach(function (item, index, array) {

  console.log(item, index, array);

})

// foreach no return so undefined
const a = fruits.forEach(function (item, index) {

  console.log(`${item}-${index}`)

})

console.log(a)

// but map function makes return value
const b = fruits.map(function (item, index) {

  return {

    id: index,
    name: item

  }

})

console.log(b[0].name)
