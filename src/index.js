Function.prototype.myBind = function (context = window, ...args1) {
  const _this = this
  let fn = Symbol()
  let newFn = function (...args2) {
    let curContext
    if (!new.target) {
      curContext = context
    } else {
      curContext = this
    }
    curContext[fn] = _this
    let res = curContext[fn](...args1, ...args2)
    delete curContext[fn]
    return res
  }
  newFn.prototype = Object.create(_this.prototype)
  return newFn
}

function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I m a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
if (cat.say() === 'I m a white cat' && cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}