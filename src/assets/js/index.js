import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  return element;
}

class Cat {

  constructor(name) {
    this.name = name
  }
  
  meow() {
    alert( this.name + 'はミャオと鳴きました' )
  }
}

let cat = new Cat("俺");
cat.meow();

document.body.appendChild(component());
