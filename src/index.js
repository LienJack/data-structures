import stop from './util'
function trap (height) {
  let res = 0
  let letfMax = []
  let rightMax = []
  for (let i =1; i < height.length - 1; i++) {
    letfMax[i] = Math.max(letfMax[i -1], height[])
  }
  for (let i=1; i < height.length - 1; i++) {
    letfMax = Math.max(...height.slice(0,i))
    rightMax = Math.max(...height.slice(i))
    debugger
    if (Math.min(letfMax, rightMax) - height[i]>0) {
      res += Math.min(letfMax, rightMax) - height[i]
    }
  }
  return res
}

const height = [2, 0, 2]
console.log(trap(height,3))