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
    alert( this.name + 'こんばんわ' )
  }
}

let cat = new Cat("私");
cat.meow();

document.body.appendChild(component());
