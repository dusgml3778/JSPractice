
let num = 1;

// const timer = setTimeout(function(){


//   console.log(num);


// },3000)

const timer = setInterval(function(){


  console.log(num);

  num +=1

},3000)

const h1El = document.querySelector('h1');

h1El.addEventListener('click',()=>{

  clearTimeout(timer)

})




