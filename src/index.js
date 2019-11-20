import stop from './util'
var printMatrix = function (matrix) {
  let result = []
  let colum = matrix[0].length
  let row = matrix.length
  let start = 0
  while(colum /2 > start) {
    circle(matrix, colum, row, start++, result)
  }
  return result
}

function circle (matrix, colum, row, start, result) {
  let top = []
  let right = []
  let bottom = []
  let left = []
  let endX = colum - start - 1
  let endY = row - start - 1
  if (start < endX) {
    for (let i = start; i <= endX ; i++) {
      top.push(matrix[start][i])
    }
    if (start < endY) {
      for(let i = start + 1; i <= endY; i++) {
        right.push(matrix[i][colum - start -1])
      }
    }
  }

  for (let j = endX - 1; start <= j; j--) {
    bottom.push(matrix[row - start - 1][j])
  }

  for (let i = endY -1 ; start < i ; i --) {
    left.push(matrix[i][start])
  }
  let res = [...top,  ...right, ...bottom, ...left]
  console.log(top, right, bottom, left)
  res.forEach(item => {
    result.push(item)
  })
}
// stop()


let matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]
console.log(printMatrix(matrix))