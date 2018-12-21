/**
 * --------------------------------------
 * jsonp (简单版)
 * --------------------------------------
 * @create 2018-12-17
 * @param {Object} obj url,success
 */
// https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%E5%B9%BF%E5%B7%9E&cb=show046389686670700536

 function jsonpUrl(json) {
   var arr = []
   for (let key in json) {
     arr.push(`${key}=${json[key]}`)
   }
   return arr.join('&')
 }
 function jsonp(obj) {
  obj || {}
  if(!obj.url) return Error('请输入url')
  let cbname = obj.cbname  || 'cd'
  let oHead = document.getElementsByTagName('head')[0]
  let oScript = document.createElement('script')
  let timeout = obj.timeOut || 15000
  obj.data['cb'] = cbname
  oScript.src = obj.url+jsonpUrl(obj.data)
  oScript.async = true
  oHead.appendChild(oScript)
  var time = setTimeout(() => {
    obj.error && obj.error('timeOut')
    window[cbname] = null
  }, timeout);
  window[cbname] = function(res) {
    obj.success && obj.success(res)
    oHead.removeChild(oScript)
    clearTimeout(time)
  }
 }

//  jsonp({
//   url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?',
//   data: {
//     "wd":'广州',
//   },
//   success: function(res) {
//     console.log(res.s)
//   }
// })

/**
 * --------------------------------------------------
 *  instanceof
 * --------------------------------------------------
 */

 function _instanceof(a, b) {
  // let _a = Object.getPrototypeOf(a)
  let _a = a.__proto__
  let _b = b.prototype
   if(_a === _b) {
     return true
   } else {
     return false
   }
 }

/**
 * --------------------------------------------------
 *  深度拷贝
 * --------------------------------------------------
 */
function deepCopy(obj) {
  let newObj
  if(typeof(obj) === 'object' && obj !== null) {
    let isArray = Array.isArray(obj)
    newObj = isArray ? [] : {}
    for(let key in obj) {
      if(typeof(obj[key])==="object") {
        newObj[key] = deepCopy(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
  } else {
    newObj = obj
  }
  return newObj
}
/**
 * --------------------------------------------------
 *  类型判断
 * --------------------------------------------------
 */
function type(obj) {
  let class2type = {};
  'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(" ").map(item => {
    class2type[`[object ${item}]`] = item.toLowerCase()
  })
  return typeof obj === 'object' || typeof obj === 'function'?  class2type[Object.prototype.toString.call(obj)|| "object"]: typeof obj
}
/**
 * --------------------------------------------------
 *  new的本质
 * --------------------------------------------------
 */
function objectFactory() {
  let obj = {}
  let construct = [].shift.apply(arguments)
  Object.setPrototypeOf(obj,construct.prototype)
  construct.apply(obj,arguments)
  return obj
}
/**
 * --------------------------------------------------
 *  call
 * --------------------------------------------------
 */
Function.prototype.call2 = function(arg) {
  var arr = []
  let context = arguments[0] || window
  // debugger
  for(let i =1, len = arguments.length; i< len; i++) {
    arr.push(`arguments[${i}]`)
  }
  arr = arr.toString()
  context.fn = this //this是为要执行的函数
  let result = eval(`context.fn(${arr})`)
  delete context.fn
  return result
}
/**
 * --------------------------------------------------
 *  call
 * --------------------------------------------------
 */

Function.prototype.apply2 = function(context, arr) {
  let ctx = context || window
  let arg = []
  ctx.fn = this
  for(let i=0, len = arr.length; i< len;i++) {
    arg.push(`arr[${i}]`)
  }
  arg = arg.toString()
  let result = eval(`ctx.fn(${arg})`)
  delete ctx.fn
  return result
}
/**
 * --------------------------------------------------
 *  bind 未完成
 * --------------------------------------------------
 */
Function.prototype.bind2 = function(context) {
  let self = this
  let args = Array.prototype.slice.call(this.arguments,1)
  return function() {
    let bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}

/**
 * --------------------------------------------------
 *  深度Object拷贝
 * --------------------------------------------------
 */

function extend() {
  let name, options, copy, src
  let length = arguments.length
  let target = arguments[0] || {}
  for(let i=1; i<length; i++) {
     options = arguments[i]
     if(options != null) {
         for(name in options) {
             copy = options[name]
             src = target[name]
             if(copy && typeof copy == 'object') {
                 target[name] = extend(src, copy)
             } else if(copy != undefined) {
                 target[name] = copy
             }
         }
     }
  }
  return target
}





