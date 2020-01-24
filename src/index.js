var generateParenthesis = function(n) {
  let res = []
  _generate(0, 0, n, '', res)
  return res
};
var _generate = function (left,right, n, s, res) {
  if (left === n && right === n) {
    res.push(s)
    return 
  }
  if (left < n) {
    _generate(left+1, right, n, s+"(", res)
  }
  // 有左括号并且个数并且右括号 < 左括号
  if (left > right) {
    _generate(left, right + 1, n, s + ")", res)
  }
}

console.log(generateParenthesis(2))