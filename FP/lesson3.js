var result
/**
 * P56
 */
var _ = require('lodash')
const square = n => n * n
// result = _.map([4,8,9],square)
// console.log(result)

const _map = (arr, fn) => {
  // debugger
  let idx = 0
  let len = arr.length
  let result = []
  // do {
  //   result[idx] = fn(arr[idx],idx,arr)
  // } while(++idx < len)
  for(;idx < len; idx++) {
    result[idx] = fn(arr[idx], idx, arr)
  }
  return result
}
// result = _map([4,8,9],square)
// console.log(result)

/**
 * P58
 */
result =  _.reduce([1,2,3],(sum,n)=> sum+n, 0)
// console.log(result)

const _reduce = (arr, fn, accumlator) => {
  let idx = -1
  let len = arr.length

  if(!accumlator && len > 0) {
    accumlator = arr[++idx]
  }
  while (++idx < len) {
    accumlator = fn(accumlator, arr[idx],idx, arr)
  }
  return accumlator
}

result =  _reduce([1,2,3],(sum,n)=> sum+n, 0)
// console.log(result)

result = _([0,1,2,3,4]).reduce(_.add)
// console.log(result)

/**
 * P61
 */
const _filter = (arr, predicate) => {
  let idx = 0
  let len = arr.length
  let result = []
  for(; idx<len; idx++) {
    let value = arr[idx]
    if(predicate(value,idx,this)) {
      result.push(value)
    }
    return result
  }
}

/**
 * P63
 */
// 构造函数
function fn() {
  console.log('real', this)  // {a: 100} ，该作用域下的 this 的真实的值
  var arr = [1, 2, 3]
  // 普通 JS
  arr.map(function (item) {
      console.log('js', this)  // window 。普通函数，这里打印出来的是全局变量，令人费解
      return item + 1
  })
  // 箭头函数
  arr.map(item => {
      console.log('es6', this)  // {a: 100} 。箭头函数，这里打印的就是父作用域的 this
      return item + 1
  })
}
fn.call({a: 100})


