// <1st memory>: 1 <2nd memory>: 4 <3rd memory>: 7

let a = 1
let b = 4

// 단순히 1,4가 다르기 때문에 false가 되는게 아니라 1이 저장되 있는 메모리 주소랑 4가 저장되있는 메모리 주소가 다르기 때문에 false
console.log(a, b, a === b)

// 변수 b를 a의 메모리 주소를 참조하게 했으니까 true
b = a

console.log(a, b, a === b)

a = 7

console.log(a, b, a === b)

let c = 1

// 변수 c는 새로운 메모리 주소에 할당되는 것이 아니라 기존의 1번 메모리의 값 1을 바라보기 때문에
// 비교하면 true
console.log(b, c, b === c)

let d = {
  k: 1
}
let e = {
  k: 1
}

console.log(d, e, d == e)

d.k = 7
e = d

console.log(d, e, d == e)