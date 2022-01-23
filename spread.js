const fruits = ['Apple', 'Banana', 'Cherry','Orange']

console.log(fruits)

console.log(...fruits)

// ...c -> rest parameter(c에는 체리 오렌지가 들어간다)
function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}

console.log(toObject(...fruits))