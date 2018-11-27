function ArrayList() {
  var array = []
  this.insert = function(item) {
    array.push(item)
  }
  this.toString = function() {
    return array.join()
  }
  this.bubleSort = function() {
    let length = array.length
    for(let i=0; i < length; i++) {
      for(let j=0; j< length; j++) {
        if(array[j] > array[j+1]) {
          swap(j, j+1)
        }
      }
    }
  }
  var swap = function(index1, index2) {
    let swap = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }
}