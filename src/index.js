var threeSum = function (nums) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue // 这里疑惑
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k] 
      if (sum === 0) {
        res.push([ nums[i], nums[j], nums[k] ])
        while (j < k && nums[j] === nums[++j]);
        while (j < k && nums[k] === nums[--k]);
      } else if (sum < 0) {
        while (j < k && nums[j] === nums[++j]);
      } else {
        while (j < k && nums[k] === nums[--k]);
      }
    }
  }
  return res
}

const arr = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(arr))