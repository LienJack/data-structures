var maxArea = function (height) {
  let max = 0
  let i = 0
  let j = height.length - 1
  while (i < j) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--]
    let area = (j - i + 1) * minHeight
    max = Math.max(max, area)
  }
  return max
};
const arr = [1, 1]

console.log(maxArea(arr))
