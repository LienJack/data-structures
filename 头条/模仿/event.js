class Event {
  constructor() {
    this._events = Object.create(null)
  }

  add (type, fn, pre) {
    if (this._events[type]) {
      if (pre) {
        this._events[type].unshift(fn)
      } else {
        this._events[type].push(fn)
      }
    } else {
      this._events[type] = [fn]
    }
  }

  emit (type, ...args) {
    if(this._events[type]) {
      this._events[type].forEach(item => {
        item.apply(this, args)
      })
    }
  }

  remove (type, fn) {
    if (this._events[type]) {
      if (!fn) {
        delete this._events[type]
      } else {
        this._events[type] = this._events[type].filter(e => e !== fn)
      }
    }
  }

  once (type, fn) {
    const only = (...args) => {
      fn.apply(this, args)
      this.remove(type, only)
    }
    this.add(type, only)
  }
}
