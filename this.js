// 일반 함수는 호출 위치에서 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
// const heropy = {

//   name: 'heropy',
//   normal: function () {

//     console.log(this.name)

//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// const amy = {

//   name: 'amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()

const timer = {

  name: 'Heropy',
  timeout: function () {

    setTimeout( ()=> {

      console.log(this.name)

    }, 2000)

  }
}

timer.timeout()