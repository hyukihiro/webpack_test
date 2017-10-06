import _ from 'lodash';
import './assets/scss/sass.scss';

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
    alert( this.name + 'これはindex.jsからです。' )
  }
}

let cat = new Cat("私");
cat.meow();

document.body.appendChild(component());
