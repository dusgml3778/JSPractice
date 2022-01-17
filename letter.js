// String mdn

const paragraph = "Hello world!"

const num = paragraph.indexOf('world')

// ある場合
console.log(num)

// ない場合
console.log(paragraph.indexOf('hell'))

// length
const str = '01234567'

console.log(str.length)

// slice
console.log(str.slice(0,3))

// replace
console.log(str.replace('012','abc'))

//match

const email = 'dusgml3779@gmail.com'

// return Array 
console.log(email.match(/.+(?=@)/))

const el = ' abc '
console.log(el.trim())