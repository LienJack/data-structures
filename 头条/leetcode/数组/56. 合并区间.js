var merge = function (intervals) {
  if (!intervals.length) return []
  let arr = intervals.sort((a, b) => a[0] - b[0])
  let res = []
  for (let i = 0; i < intervals.length; i++) {
    let curRight = arr[i][1]
    let curLeft = arr[i][0]
    while (i < arr.length - 1 && curRight >= arr[i + 1][0]) {
      curRight = Math.max(curRight, arr[i + 1][1])
      i++
    }
    res.push([curLeft, curRight])
  }
  return res
};