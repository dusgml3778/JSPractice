import _ from 'lodash';

console.log('hello world');
console.log(_.camelCase('hello world'));

// ctrl c -> terminal

const ulEl = document.querySelector('ul');

console.log(ulEl);

for (let i = 0; i < 3; i++) {

  const li = document.createElement('li');

  li.textContent = `list-${i+1}`;

  if (i % 2 === 0) {

    li.addEventListener('click', function () {

      console.log(li.textContent);

    })
  }

  ulEl.appendChild(li);

}