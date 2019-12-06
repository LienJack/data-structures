var findMin = function(nums) {
    let high = nums.length-1;
    let low = 0
    while (low < high) {
      let mid = Math.floor((mid + high)/2)
      if (nums[mid] > nums[high]) {
        low = mid
      } else if (nums[mid] < nums[high]) {
        high = mid
      } else {
        high = high + 1
      }
    }
    return arr[low]
};