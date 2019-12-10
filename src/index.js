const nums = [10,9,2,5,3,7,101,18]
var lengthOfLIS = function(nums) {
    if(!nums.length) return 0
    let dep = []
    dep[0] = 1
    for(let i = 1; i < nums.length; i++) {
      let maxDep = 0
      for(let j=0; j < i; j++) {
        if (nums[j] < nums[i]) {
          maxDep = Math.max(maxDep, dep[j])
        }
      }
      dep[i] = ++maxDep
    }
    return Math.max(...dep)
};
console.log(lengthOfLIS(nums))