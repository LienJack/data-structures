function objectFactory() {
  let obj = {}
  let construct = [].shift.apply(arguments)
  Object.setPrototypeOf(obj,construct.prototype)
  construct.apply(obj,arguments)
  return obj
}