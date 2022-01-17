
// 화살표 함수
const doubleArrow = (x) =>{

  return x*2
}

console.log(doubleArrow(7));

// 객체는 괄호 안에 넣어야 인식 가능
const double = x => ({name:x});

console.log(double('min'))

// 호이스팅 
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 3

call()

//Ok
function call(){

  console.log(a*2)
}

