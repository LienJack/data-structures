var getPermutation = function (n, k) {
  const orginList = Array.from(Array(n + 1), (item, index) => index)
  const factorial = (n) => {
    let i = 1
    let res = 1
    while (i <= n) {
      res *= i++
    }
    return res
  }
  const DFS = (arr, n, k, res) => {
    if (arr.length === 1) return res
    const factorialRes = factorial(n - 1)
    const index = Math.ceil(k / factorialRes)
    const newKey = k % factorialRes === 0 ? factorialRes : k % factorialRes
    res += arr[index]
    const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)]
    return DFS(newArr, --n, newKey, res)
  }
  return DFS(orginList, n, k, '')
};