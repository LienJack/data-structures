var climbStairs = function (n) {
  let mem = {}
  // debugger
  if (n <= 2) return n
  if (mem[n]) {
    return mem[n]
  } else {
    return mem[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
};

var climbStairs = function (n) {
  let dep = {}
  for (let i = 0; i <= n; i++) {
    // debugger
    if (i <= 2) {
      dep[i] = i
    } else {
      dep[i] = dep[i - 1] + dep[i - 2]
    }
  }
  return dep[n]
};