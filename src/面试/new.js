function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.show = function () {
  return `name:${this.name}, age${this.age}`
}


function myNew (ctx, ...args) {
  let obj = Object.create(ctx.prototype)
  let res = ctx.call(obj, ...args)
  return typeof res === 'object' ? res : obj
}

