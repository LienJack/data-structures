function maxSlidingWindow(arr, k) {
  let res = []
  let window = []
  for (let i = 0; i < arr.length; i++) {
    if (window.length < k) {
      window.push(arr[i])
      if (window.length === k) {
        res.push(Math.max(...window))
      }
    } else {
      window.shift()
      window.push(arr[i])
      console.log([].concat(...window))
      res.push(Math.max(...window))
    }
  }
  return _arr
}
function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin; 
}
let arr = Array.from(Array(10), (item, index) => index)
console.log(randoSort(arr))
