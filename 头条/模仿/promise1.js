class myePromise {
  constructor (fn) {
    const self = this;
    this.status = 'pending'
    this.value = null
    this.reason = null

    const reslove = (value) => {
      if (this.status === 'pending') {
        this.value = value
        this.status = 'fulfilled'
      }
    }

    const reject = (reason) => {
      if (this.status ==='pending') {
        this.reason = reason
        this.status = 'rejected'
      }
    }

    fn(reslove, reject)
  }

  then (onfulfilled, onrejected) {
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
    onrejected = typeof onreject === 'function' ? onrejected : error => { throw error }
  }

}