var minimumTotal = function (triangle) {
  let len = triangle.length
  let i = 0
  let j = 0
  let map = new Map()
  const help = (i, j, triangle) => {
    if (i === len - 1) {
      return triangle[i][j]
    }
    if (map.has(`${i}${j}`)) {
      return map.get(`${i}${j}`)
    } else {
      let left = help(i + 1, j, triangle)
      let right = help(i + 1, j + 1, triangle)
      let res = Math.min(left, right) + triangle[i][j]
      map.set(`${i}${j}`, res)
      return res
    }
  }
  return help(0, 0, triangle)
};

var minimumTotal = function (triangle) {
  let dp = triangle
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j]
    }
  }
  return dp[0][0]
};

