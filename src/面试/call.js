Function.prototype.myCall = function (context = window ,...args) {
  let key = Symbol()
  context = context || window
  context[key] = this
  let res = context[key](...args)
  delete context[key]
  return res
}

Function.prototype.myApply = function (context = window, args) {
  let key = Symbol()
  context = context || window
  context[key] = this
  let res
  if (Array.isArray(args)) {
      res = context[key](...args)
  } else {
      res = context[key]()
  }
  delete context[key]
  return res
}

let obj = {
  a: 1
}

function test () {
 return this.a
}
// console.log(test.myCall(obj))
// console.log(test.myApply(obj))