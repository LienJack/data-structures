var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i ++) {
      if(map[target- nums[i]]!==undefined) {
        return [map[target- nums[i]],i]
      } else {
        map[nums[i]] = i
      }
    }
};

let nums = [2, 7, 11, 15]
console.log(twoSum(nums,9))