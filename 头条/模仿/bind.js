// 本质obj.fn
Function.prototype.myBind = function (context = window, ...args1) {
  const _this = this
  return function F(...args2) {
    // 判断是否用于构造函数
    if (this instanceof F) {
      return new _this(...args1, ...args2)
    }
    return _this.apply(context, args1.concat(args2))
  }
}