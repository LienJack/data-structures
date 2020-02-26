var maxSubArray = function (nums) {
  var max = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < nums.length; i++) {
    var sum = 0;
    for (var j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0
  let dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i]
  }
  return Math.max(...dp)
};