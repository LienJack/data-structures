var maximalSquare = function (matrix) {
  if (!matrix.length) return 0
  let row = matrix.length
  let col = matrix[0].length
  let maxSide = 0
  let dp = matrix
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = parseInt(matrix[i][j])
        maxSide = Math.max(matrix[i][j], maxSide)
        continue
      }
      if (matrix[i][j] == "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }
  return maxSide * maxSide
};