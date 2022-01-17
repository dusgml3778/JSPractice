// callback
// 함수의 인수로 사용되는 함수 

function timeout(callback) {

  setTimeout(() => {

    console.log('heropy');
    callback()
  }, 3000)

}

timeout(()=>{
  console.log('done')
});
