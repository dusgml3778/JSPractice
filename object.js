//assign method

const target = {
  a: 1,
  b: 2
};
const source = {
  a: 3,
  c: 5
};

const a = Object.assign(target, source)

console.log(target === a)

const b = Object.assign({}, target, source);

console.log(b)

console.log(target)

// 새로운 객체를 만들어서 넣기 때문에 참조하는 메모리 주소가 달라짐 그래서 결과는 false
console.log(b === target)

const user = {

  name: 'Heropy',
  age: 85,
  email: 'dusgml3779@gmail.com'
}

const keys = Object.keys(user)

console.log(keys)

const values = keys.map(key => user[key])

console.log(values)
