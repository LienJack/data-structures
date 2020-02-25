Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

Promise.reject = function(value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

Promise.all = function (promsieArray) {
  return new Promise((resolve, reject) => {
    let resultArray = []
    const length = promsieArray.length
    for (let i = 0; i < length; i++) {
      promsieArray[i].then(data => {
        resultArray.push(data)

        if (resultArray.length === length) {
          resolve(resultArray)
        }
      }, reject)
    }
  })
}

Promise.race = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const length = promiseArray.length
    for (let i = 0; i < length; i++) {
      promsieArray[i].then(resolve, reject)
    }
  })
}

Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

Promise.reject = function(value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}