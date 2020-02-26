class LimitPromise  {
  constructor(max) {
    this._max = max
    this._count = 0
    this._taskQueue = []
  }

  call(caller, ...args) {
    return new Promise((resolve, reject) => {
      const task = this._createTask(caller, args, resolve , reject)
      if (this._count > this._max) {
        this._taskQueue.push(task)
      } else {
        task()
      }
    })
  }

  _createTask (caller, args, resolve, reject) {
    this._count++
    return () => {
      caller(...args)
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this._count--
        if (this._taskQueue.length) {
          let task = this._taskQueue.shift()
          task()
        }
      })
    }
  }
}

// 测试用例
const limitP = new LimitPromise (2)
let p1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    },1000)
  })
}
let p4 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(4)
      resolve()
    },1000)
  })
}
let p2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(2)
      resolve()
    },1000)
  })
}
let p3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(3)
      resolve()
    },1000)
  })
}


