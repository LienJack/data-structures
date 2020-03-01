var findLengthOfLCIS = function (nums) {
  let len = 1
  let res = 0
  if (!nums.length) return 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      len++
    } else {
      res = Math.max(res, len)
      len = 1
    }
  }
  res = Math.max(res, len)
  return res
}