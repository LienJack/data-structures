var minDistance = function(word1, word2) {
    let row = word2.length
    let col = word1.length
    let dp = Array.from(Array(row+1), () => Array(col+1).fill(0))
    for (let i = 0; i <= col; i++) {
        dp[0][i] = i
    } 
    for (let i = 0; i <= row; i++) {
        dp[i][0] = i
    } 
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (word1[j-1] === word2[i-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
            }
        }
    }
    console.log(dp)
    return dp[row][col]  
};



console.log(minDistance("horse","ros"))