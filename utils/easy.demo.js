
/**
 * --------------------------------------------------
 * JSONP 
 * --------------------------------------------------
 */
// https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%E5%B9%BF%E5%B7%9E&cb=show046389686670700536
function json2url(json){
  //创建一个空数组
  var arr = [];
  //遍历json的每个键值对
  for(var key in json){

      //把每个键值对转换成=的形式依次放入数组
      arr.push(key+'='+json[key]);

  };
  //用&进行字符串拼接，并返回结果
  return arr.join('&');
}

//封装一个jsonp函数
function jsonp(json){
  //在没有传入json的情况下，默认设置为{}
  json = json||{};
  //判断是否传入url交互地址，如果没有，则终止运行
  if(!json.url)return;
  //设置响应时间，默认为15秒（后台为3秒）
  json.timeout = json.timeout||15000;
  //设置默认的接口（仅对于此处用到的url）
  json.cbName = json.cbName||'cb';
  //默认数据为一个空的json
  json.data = json.data||{};
  //设置jsonp的回调函数名并同时设置刷新缓存（利用随机数）
  json.data[json.cbName] = 'show'+Math.random();

  //把随机数里生成的.替换为空（函数命名不要有点）
  json.data[json.cbName] = json.data[json.cbName].replace('.','');

  //获取头部元素
  var oHead = document.getElementsByTagName('head')[0];

  //创新script（此处用到jsonp的核心机制，利用script的跨域异步请求，调用回调函数）
  var oS = document.createElement('script');

  //给script的src的地址赋值为交互地址
  oS.src = json.url+'?'+json2url(json.data);
  // 异步加载
  oS.async = true
  //把创建的script放入head中
  oHead.appendChild(oS);


  //设置一个定时器
  var timer = setTimeout(function(){

      //当响应时间超时后，使后续的函数不执行
      window[json.data[json.cbName]] = null;

      //并提示网络信息
      json.error&&json.error('亲，网络不给力！');

  },json.timeout);

  //当数据正常响应时，执行以下操作
//   debugger
  window[json.data[json.cbName]] = function(res){
      //关闭定时器
    //   console.log(json.data[json.cbName])
      clearTimeout(timer);
      //清除之前插入的script（因为script只加载一次，并且此时已收到数据）
      oHead.removeChild(oS);
      //执行成功时设置的函数
      json.success&&json.success(res);
  };
}

// jsonp({

//   //百度数据地址
//   "url":"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",

//   //数据接口
//   "data":{
//       "wd":'广州'
//   },
//   //交互成功时
//   "success":function(res){
//       //弹出获取的数据
//       console.log(res.s);
//   }
// });

/**
 * --------------------------------------------------
 *  instanceof
 * --------------------------------------------------
 */
function _instanceof(A, B) {
    var O = B.prototype;// 取B的显示原型
    A = A.__proto__;// 取A的隐式原型
    while (true) {
        //Object.prototype.__proto__ === null
        if (A === null)
            return false;
        if (O === A)// 这里重点：当 O 严格等于 A 时，返回 true
            return true;
        A = A.__proto__;
    }
}

/**
 * --------------------------------------------------
 *  深度拷贝
 * --------------------------------------------------
 */
function deepCopy(obj) {
    var newObj;
    if(typeof obj === 'object'){
        let isArray = Array.isArray(obj)
        newObj = isArray ? [] : {};
        for(var key in obj){
            if(typeof obj[key] === 'object'){
                newObj[key] = deepCopy(obj[key]);
            }else{
                newObj[key] = obj[key];
            }
        }
    }else{
        newObj = obj;
    }
    return newObj;
}
/**
 * --------------------------------------------------
 *  深度拷贝 yck
 * --------------------------------------------------
 */

 function deepClone(obj) {
     function isObject(o) {
         return (typeof o === 'object' || typeof o === 'function') && o !== null
     }
     if (!isObject(obj)) {
         throw new Error('非对象')
     }

     let isArray = Array.isArray(obj)
     let newObj = isArray ? [ ...obj ] : { ...obj }
     Reflect.ownKeys(newObj).forEach(key => {
         newObj[key] = isObject(obj[key]) ? deepClone(obj[key]): obj[key]
     })
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
 *  isArrayLike
 * --------------------------------------------------
 */

 function isArrayLike(obj) {
     let length = !!obj && 'length' in obj && obj.length
     let typeRes = type(obj)

     if(typeRes === 'function' || (obj != null && obj === obj.window)) {
         return false
     }
     return typeRes === 'array' || length === 0|| typeof length === "number" && length > 0 
 }
/**
 * --------------------------------------------------
 *  new的本质
 * --------------------------------------------------
 */

 function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
};

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
/**
 * --------------------------------------------------
 *  实现findIndex
 * --------------------------------------------------
 */

 function _findIndex (array, fn, context) {
     for (let i=0; i<array.length; i++) {
         if(fn.call(context, array[i], i,array)) return i
     }
     return -1
 }

/**
 * --------------------------------------------------
 *  实现findLastIndex
 * --------------------------------------------------
 */

 function _findLastIndex(array,fn,context) {
     let length = array.length
     for(let i = length -1; i >=0; i--) {
         if(fn.call(context,array[i],i,array)) return i
     }
     return -1
 }

/**
 * --------------------------------------------------
 *  相等
 * --------------------------------------------------
 */

function eq(a,b) {
    // 判断+0 和 -0
    if(a === b) return a!==0 || 1/a === 1/b

    // NaN 判断
    if(a!==a) return b !==b

    let type = typeof a

    if(type !== 'function' && type !== 'object' && typeof b != 'object') return false

    
    
    return false
}

/**
 * --------------------------------------------------
 *  函数柯里化
 * --------------------------------------------------
 */

var curry = function(fn, length) {
    var length = length || fn.length
    var slice = Array.prototype.slice
    return function() {
        if(arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments))
            return curry(curry.apply(this, combined),length - arguments.length)
        }
    }
}

/**
 * --------------------------------------------------
 *  promise yck
 * --------------------------------------------------
 */

//  const PENDING = 'pending'
//  const RESOLVED = 'resolved'
//  const REJECTED = 'rejected'

//  function YckPromise(fn) {
//      const that = this
//      that.state = PENDING
//      that.value = null
//      that.resolvedCallbacks = []
//      that.rejectedCallbacks = []
//     debugger
//      function resolve(value) {
//         if(value instanceof YckPromise) return value.then(resolve, reject)
//         setTimeout(()=>{
//             if(that.state === PENDING) {
//                 that.state = RESOLVED
//                 that.value = value
//                 that.resolvedCallbacks.map( cd => cd(that.value))
//             }
//         }, 0)
//      }
//      function reject(value) {
//          setTimeout(()=> {
//             if(that.state === PENDING) {
//                 that.state = REJECTED
//                 that.value = value
//                 that.rejectedCallbacks.map( cd => cd(that.value))
//             }
//          })
//      }
//      try {
//          fn(resolve, reject)
//      } catch (e) {
//          that.reject(e)
//      }
//  }

//  YckPromise.prototype.then = function(onFulfilled, onRejected) {
//      const that = this
//      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
//      onRejected = 
//         typeof onRejected === 'function' 
//             ? onRejected : r => { throw r}
//     if (that.state === PENDING) {
//         return (promise2 = new YckPromise((resolve,reject) => {
//             that.resolvedCallbacks.push(()=>{
//                 try {
//                     const x = onFulfilled(that.value)
//                     resolutionProcedure(promise2, x, resolve, reject)
//                 } catch(r) {
//                     reject(r)
//                 }
//             })
//             that.rejectedCallbacks.push(()=>{
//                 try {
//                     const x = onRejected(that.value)
//                     resolutionProcedure(promise2, x, resolve, reject)
//                 } catch(r) {
//                     reject(r)
//                 }

//             })
//         }))
//     }
//     if(that.state === RESOLVED) {
//         return (promise2 => new YckPromise((resolve, reject) => {
//             setTimeout(()=>{
//                 try {
//                     const x = onFulfilled(that.value)
//                     resolutionProcedure(promise2, x, resolve, reject)
//                 } catch(reason) {
//                     reject(reason)
//                 }
//             })
//         }))
//     }
//     if(that.state === REJECTED) {
//         return (promise2 => new YckPromise((resolve, reject) => {
//             setTimeout(()=>{
//                 try {
//                     const x = onRejected(that.value)
//                     resolutionProcedure(promise2, x, resolve, reject)
//                 } catch(reason) {
//                     reject(reason)
//                 }
//             })
//         }))
//     }
//     function resolutionProcedure(promsie2, x, resolve, reject) {
//         if(promise2 === x) {
//             return reject(new TypeError('Error'))
//         }
//         let p = new YckPromise((resolve, reject) => {
//             resolve(1)
//         })
//         let p1 = p.then(value => {
//             return p1
//         })
//         if (x instanceof YckPromise) {
//             x.then(function(value) {
//                 resolutionProcedure(promise2, value, resolve, reject)
//             }, reject)
//         }
//         let called = false
//         if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
//         try {
//             let then = x.then
//             if (typeof then === 'function') {
//             then.call(
//                 x,
//                 y => {
//                 if (called) return
//                 called = true
//                 resolutionProcedure(promise2, y, resolve, reject)
//                 },
//                 e => {
//                 if (called) return
//                 called = true
//                 reject(e)
//                 }
//             )
//             } else {
//             resolve(x)
//             }
//         } catch (e) {
//             if (called) return
//             called = true
//             reject(e)
//         }
//         } else {
//         resolve(x)
//         }
//     }
//  }

 
/**
 * --------------------------------------------------
 *  promise 面条
 * --------------------------------------------------
 */
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
    constructor (handle) {
      if (!isFunction(handle)) {
        throw new Error('MyPromise must accept a function as a parameter')
      }
      // 添加状态
      this._status = PENDING
      // 添加状态
      this._value = undefined
      // 添加成功回调函数队列
      this._fulfilledQueues = []

      // 添加失败回调函数队列
        this._rejectedQueues = []
      // 执行handle
      try {
        handle(this._resolve.bind(this), this._reject.bind(this)) 
      } catch (err) {
        this._reject(err)
      }
    }
    // 添加resovle时执行的函数
    _resolve (val) {
      if (this._status !== PENDING) return
      this._status = FULFILLED
      this._value = val
    }
    // 添加reject时执行的函数
    _reject (err) { 
      if (this._status !== PENDING) return
      this._status = REJECTED
      this._value = err
    }
    then(onFulfilled, onRejected) {
        const { _value, _status } = this
        switch(_status) {
            case PENDING: 
                this._fulfilledQueues.push(onFulfilled)
                this._rejectedQueues.push(onRejected)
                break
            case FULFILLED:
                onFulfilled(_value)
            case REJECTED:
                onRejected(_value)
                break
        }
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
        })
    }
  }


  /**
 * --------------------------------------------------
 *  节流
 * --------------------------------------------------
 */
const throttle = (func, wait = 50) => {
    let lastTime = 0
    return function (...arguments) {
        let now = +new Date()
        if(now - lastTime > wait) {
            lastTime = now
            func.apply(this, arguments)
        }
    }
}

/**
 * --------------------------------------------------
 *  防抖
 * --------------------------------------------------
 */

 const debounce = (func, wait = 50 ) => {
     let timer = 0
     return function(...arguments) {
         if(timer) clearTimeout(timer)
         timer = setTimeout(()=>{
             func.apply(this, arguments)
         }, wait)
     }
 }






