var obj = new Proxy({},{
  get: (target, key, receiver) => {
    console.log(`getting ${key}`)
    return Reflect.get(target, key, receiver)
  },
  set: (target, key, value, receiver) => {
    console.log(`setting ${key}`)
    return Reflect.set(target, key, value, receiver)
  }
})

let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, key, receiver) {
      getLogger(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      setBind( key, value )
      return Reflect.set(target,key, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj2 = { a: 1 }
let p = onWatch(
  obj2,
  (key, value) => {
    console.log(`检测到属性${key}改变为${value}`)
  },
  (target, key) => {
    console.log(`${key}=${target[key]}`)
  }
) 

console.log(p)