var minimumTotal = function(triangle) {
    let mini = []
    mini[triangle.length - 1] = triangle[triangle.length - 1]
    for (let i = triangle.length -2; i >=0; --i) {
      if (!mini[i]) {
        mini[i] = []
      }
      for(let j = 0; j < triangle[i].length; j++) {
        mini[i][j] = triangle[i][j] + Math.min(mini[i+1][j], mini[i+1][j+1])
      }
    }
    return mini[0][0] 
};
const arr = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]
console.log(minimumTotal(arr))