import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  console.log('!!!');

  return element;
}

class Cat {

  constructor(name) {
    this.name = name;
  }

  meow() {
    alert( this.name + 'こんばんわ');
  }
}

let cat = new Cat("私");
cat.meow();

document.body.appendChild(component());
console.log("%cThis is made by me. :house_with_garden:","padding:4px; background: #333; color: #fff");
// console.log("%cTake a look to the code on github : http://github.com/ivandaum/ivandaum","padding:3px; background: #000; color: #fff");
console.log('');
