Function.prototype.myCall = function (context = window, ...args) {
    const fn = Symbol()
    context[fn] = this
    let result = context[fn](...args)
    delete context[fn]
    return result
}

let obj = {
    a: 1,
    b:1
}

function test (c,d) {
    return `${this.a},${this.b},${c},${d}`
}
console.log(test.call(obj,3,4))