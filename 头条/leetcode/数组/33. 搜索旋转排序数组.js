var search = function (nums, target) {
  if (!nums.length) return -1
  let left = 0
  let right = nums.length - 1
  function DFS(left, right) {
    let mid = (left + right) >> 1
    if (target === nums[left]) return left
    if (target === nums[right]) return right
    if (target === nums[mid]) return mid
    if (left === right || left === right - 1) return - 1
    if (nums[left] < nums[mid]) {
      if (target < nums[mid] && target > nums[left]) {
        return DFS(left, mid)
      } else {
        return DFS(mid, right)
      }
    } else {
      if (target > nums[mid] && target < nums[right]) {
        return DFS(mid, right)
      } else {
        return DFS(left, mid)
      }
    }
  }
  return DFS(left, right)
};