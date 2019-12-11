const coins = [1, 2, 5]
var coinChange = function (coins, amount) {
  if (amount < 1) return 0;
  var dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (var i = 0; i <= amount; i++) {
    for (var r = 0; r < coins.length; r++) {
      if (coins[r] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[r]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
console.log(coinChange(coins,11))