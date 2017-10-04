import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  comsole.log('in');

  return element;
}

class Cat {

  constructor(name) {
    this.name = name;
  }

  meow() {
    alert( this.name + 'またはミャお' )
  }
}

let cat = new Cat("俺");
cat.meow();

document.body.appendChild(component());
