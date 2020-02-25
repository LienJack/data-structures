class myPromise {
  constructor (fn) {
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onFulfilledFunc = []
    this.onRejectedFunc = []

    const reslove = (value) => {
      setTimeout(() => {
        if (this.status === 'pending') {
          this.value = value
          this.status = 'fulfilled'

          this.onFulfilledFunc.forEach(func => {
            func(value)
          })
        }
      })
    }

    const reject = (reason) => {
      setTimeout(() => {
        if (this.status ==='pending') {
          this.reason = reason
          this.status = 'rejected'
  
          this.onRejectedFunc.forEach(func => {
            func(reason)
          })
        }
      })
    }

    fn(reslove, reject)
  }

  then (onfulfilled, onrejected) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
    onrejected = typeof onreject === 'function' ? onrejected : error => { throw error }
    let promsie2
    if (this.status === 'fulfilled') {
      return promsie2 = new myPromise((resolve, reject) => {
        setTimeout(() => {
          let result = onfulfilled(this.value)
          resolve(result)
        })
      })
    }
    if (this.status === 'rejected') {
      return promsie2 = new myPromise((resolve,reject) => {
        let result = onrejected(this.reason)
        reject(this.reason)
      })
    }
    if (this.status === 'pending') {
      this.onFulfilledFunc.push(() => {
        setTimeout(() => {
          let result = onfulfilled(this.value)
          reslove(result)
        })
      })
      this.onRejectedFunc.push(() => {
        setTimeout(() => {
          let result = onrejected(this.value)
          reject(result)
        })
      })
    }
  }
}







