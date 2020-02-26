if (!nums.length) return 0
let set = new Set(nums)
let max = 1
for (let i = 0; i < nums.length; i++) {
  if (!set.has(nums[i] - 1)) {
    let time = 0
    let cur = nums[i]
    while (set.has(cur)) {
      time++
      cur++
    }
    max = Math.max(time, max)
  }
}
return max