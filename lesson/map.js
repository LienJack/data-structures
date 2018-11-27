function Dictionary() {
  let items = {}
  this.has = function(key) {
    return key in items
  }
  this.set = function(key, value) {
    items[key] = value
  }
  this.remove = function(key) {
    if(this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  this.get = function() {
    return this.has(key) ? items[key] : undefined
  }
  this.values = function() {
    var values = []
    for(let k in items) {
      if(this.has(k)) {
        values.push(items[k])
      }
    }
    return values
  }
  this.size = function() {
    return this.values().length
  }

}

// hash
function HashTable() {
  let table = []
  var _HashCode = function(key) {
    let hash = 0
    for(let i=0; i< key.length;i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
  this.put = function(key, value) {
    let position = _HashCode(key)
    console.log(position + '-' + key)
    table[position] = value
  }
  this.get = function(key) {
    return table[_HashCode(key)]
  }
  this.remove = function(key) {
    table[_HashCode(key)] = undefined
  }
  this.print = function() {
    for(let i=0; i<table.length; i++) {
      if(table[i] !== undefined) {
        console.log(i + ":" + table[i])
      }
    }
  }
}



