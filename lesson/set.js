function Set() {
  let items = {}
  this.has = function(value) {
    return items.hasOwnProperty(value)
  }
  this.add = function(value) {
    if(!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  this.remove = function(value) {
    if(!this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }
  this.clear = function() {
    items = {}
  }
  this.size = function() {
    return Array.from(Object.keys(items)).length
  }
  this.sizeLegacy = function() {
    let count = 0
    for(let prop in items) {
      if(items.hasOwnProtperty(prop)) {
        ++count
      }
    }
    return count
  }
  this.values = function() {
    return Object.keys(items)
  }
  // 并集
  this.union = function(otherSet) {
    let unionSet = new Set()
    let values = this.values()
    for(let i=0; i< values.length; i++) {
      unionSet.add(values[i])
    }
    values =otherSet.values()
    for (let i=0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  // 交集
  this.intersection = function(otherSet) {
    let insersectionSet = new Set()
    let values = this.values()
    for(let i=0; i<values.length;i++) {
      if(otherSet.has(values[i])) {
        insersectionSet.add(values[i])
      }
    }
    return insersectionSet
  }
  // 子集
  this.subset = function(otherSet){
    if(this.size() > otherSet.size()) return false
    else {
      let values = this.values()
      for(let i=0; i<values.length;i++) {
        if(!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}





