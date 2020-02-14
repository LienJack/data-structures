function randoSort (arr) {
  let _arr = []
  while (arr.length) {
    let item = randomRange(0,arr.length-1)
    _arr.push(arr[item])
    arr.splice(item,1)
  }
  return _arr
}
function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin; 
}
let arr = Array.from(Array(10), (item, index) => index)
console.log(randoSort(arr))