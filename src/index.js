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
  return res
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(nums,3))