/**
 * --------------------------------------------------
 *  call
 * --------------------------------------------------
 */
/**
 * 1.this的绑定
 * 2.传参
 * 3.兼容es5
 */
// 简约版
Function.prototype.call1 = function(ctx) {
  let arr = []
  for(let i = 1; i < arguments.length; i++) {
    arr[i-1] = arguments[i]
  }
  // let ctx = arguments[0] || window
  ctx.fn = this
  let result = ctx.fn(...arr)
  return result
}
// 兼容版
Function.prototype.call2 = function() {
  let arr = []
  for(let i = 1; i < arguments.length; i++) {
    arr.push('arguments['+ i +']')
  }
  arr = arr.toString()
  let context = arguments[0] || window
  context.fn = this
  let result = eval('context.fn('+ arr +')')
  return result
}

// var obj = {
//   value: 1
// }

// function bar(name, age) {
//   return {
//       value: this.value,
//       name: name,
//       age: age
//   }
// }

// console.log(bar.call1(obj, 'kevin', 18));

/**
 * --------------------------------------------------
 *  call yck
 * --------------------------------------------------
 */
Function.prototype.mycall = function(ctx) {
  ctx = ctx || window
  ctx.fn = this
  const args = [...arguments].slice(1)
  const result = ctx.fn(...args)
  delete ctx.fn
  return result
}

/**
 * --------------------------------------------------
 *  apply yck
 * --------------------------------------------------
 */
Function.prototype.myApply = function(ctx) {
  ctx = ctx || window
  ctx.fn = this
  let retult
  if(arguments[1]) {
    result = ctx.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

/**
 * --------------------------------------------------
 *  bind 简易版
 * --------------------------------------------------
 */

 Function.prototype.bind1 = function(context) {
   let self = this
   let ctx = arguments[0]
   let args = Array.prototype.slice.call(arguments, 1)
   return function () {
     let bindArgs = Array.prototype.slice.call(arguments)
      return self.apply(ctx, args.concat(bindArgs))
   }
 }
 /**
 * --------------------------------------------------
 *  bind 简困难版
 * --------------------------------------------------
 */

Function.prototype.bind2 = function(context) {
   let self = this
   let ctx = arguments[0]
   let args = Array.prototype.slice.call(arguments, 1)
   
  var fBound = function() {
    let bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof fBound ? this: context, args.concat(bindArgs))
  }
  fBound.prototype = Object.create(this.prototype)
  return fBound
 }

 /**
 * --------------------------------------------------
 *  bind yck
 * --------------------------------------------------
 */
 Function.prototype.myBind = function(ctx) {
   const _this = this
   const args = [...arguments].slice(1)
   return function F() {
     if(this instanceof F) {
       return new _this(...args, ...arguments)
     } else {
       return _this.apply(ctx, args.concat(...arguments))
     }
   }
 }

 /**
 * --------------------------------------------------
 *  深度拷贝
 * --------------------------------------------------
 */
 function deepClone (obj) {
   let newObj
   if (typeof(obj) === 'object') {
    let isArray = Array.isArray(obj)
    newObj = isArray ? [] : {}
    for (let key in obj) {
      if(typeof(key)=== 'object') {
        newObj[key] = deepClone(obj[key])
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
 *  new 的本质
 * --------------------------------------------------
 */
function new2() {
  let newObj = {}
  let Construction = Array.prototype.shift.call(arguments)
  Object.setPrototypeOf(newObj, Construction.prototype)
  let ret = Construction.apply(newObj, arguments)
  return typeof(ret) === 'object' ? ret : newObj
}


// function Otaku (name, age) {
//   this.strength = 60;
//   this.age = age;

//   return 'handsome boy';
// }

// var person = new2(Otaku,'Kevin', '18');

// console.log(person.name) // undefined
// console.log(person.habit) // undefined
// console.log(person.strength) // 60
// console.log(person.age) // 18

/**
 * --------------------------------------------------
 *  instanceof
 * --------------------------------------------------
 */

 function instanceof1(a,b) {
   let O = b.prototype
   A = a.__proto__
   while(true) {
     if(A === O) return true
     if(A === null) return false
     A = A.prototype
   }
 }
let arr = []

function throttle(fn, delay) {
  let time
}

 /**
  * ---------------------------------------
  *  防抖 简单
  * ------------------------------------- 
  */

 {
  let count = 1
  let container = document.getElementById('container')

  function getUserAction(e) {
      container.innerHTML = count++
      console.log('fn',e)
  }

  function debounce2(func, wait) {
      let timeout
      return function() {
          let ctx = this
          let args = arguments
          clearTimeout(timeout)
          timeout = setTimeout(()=>{
              func.apply(ctx, args)
          }, wait)
      }
  }
  // container.addEventListener('mousemove',debounce2(getUserAction,100))
}

 /**
  * ---------------------------------------
  *  节流 使用时间戳
  * ------------------------------------- 
  */
 {
  let count = 1
  let container = document.getElementById('container')

  function getUserAction(e) {
      container.innerHTML = count++
  }

  function throttle(func, wait) {
      let ctx
      let args
      let previous = 0
      return function() {
          let now = +new Date()
          ctx = this
          args = arguments
          if(now - previous > wait) {
              func.apply(ctx, args)
              previous = now
          }
      }
  }

  // container.addEventListener('mousemove',debounce2(getUserAction,100))
}

/**
* ---------------------------------------
*  节流 使用定时器
* ------------------------------------- 
*/

 {
  function throttle(func, wiat) {
      let timeout
      let previous = 0
      return function() {
          let ctx = this
          args = arguments
          if(!timeout) {
              timeout = setTimeout(()=>{
                  timeout = null
                  func.apply(ctx, args)
              }, wait)
          }
      }
  } 
}

/**
* ---------------------------------------
*  数组扁平化
* ------------------------------------- 
*/
{
  function flate1(arr) {
    while (arr.some(item => Array.isArray(itme))) {
      arr = [].concat(...arr)
    }
    return arr 
  }
  function flate2(arr) {
    [].concat(arr.toString().split(','))
  } 
  function flate3(arr) {
    let newarr = []
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        newarr.push.apply(newarr,flate3(arr[i]))
      } else {
        newarr.push(arr[i])
      }
    }
    return newarr
  }
  // console.log(flate3([1,2,[3,4,[5,6,7]],9,[10,11]]))
}

/**
* ---------------------------------------
*  去重
* ------------------------------------- 
*/
{
  function unique1(arr) {
    return [...new Set(arr)]
  }
  function unique2(arr) {
    return arr.filter.call(arr, (item,index)=>{
      return arr.indexOf(item) === index
    })
  }
}

/**
* ---------------------------------------
*  统计字符串最多
* ------------------------------------- 
*/
{
  function totalStr(str) {
    let arr = str.split("")
    let obj = {}
    arr.forEach(item => {
      if(obj[item]) {
        obj[item] ++
      } else {
        obj[item] = 1
      }
    })

    let num = 0
    let maxStr = ""
    for (let k in obj) {
      if(obj[k] > num) {
        num = obj[k]
        maxStr = k
      }
    }
    console.log(obj)
    return maxStr
  }
  console.log(totalStr('aaaaaaaaaaabcsasdf'))
}