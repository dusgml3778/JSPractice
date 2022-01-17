function User(firstname,lastname){

  this.firstname=firstname
  this.lastname=lastname

}

// 프로토타입 쓰는 이유 firstName,lastName은 객체마다 다른값을 갖지만 
//getFullName 함수는 공통적으로 갖는다 그래서 메모리에 한번만 생성해서 공유해서 씀

User.prototype.getFullName = function(){

  return `${this.firstname} ${this.lastname}`
}

const one = new User('kim','min')

const two = new User('park','young')

console.log(one)
console.log(two)