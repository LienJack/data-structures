Function.prototype.myCall = function (context = window, ...args) {
    const fn = Symbol()
    context[fn] = this
    let result = context[fn](...args)
    delete context[fn]
    return result
}