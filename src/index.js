var minimumTotal = function(triangle) {
    let len = triangle.length
    let i = 0
    let j = 0
    let map = new Map()
    const help = (i,j, triangle) => {
        if (i=== len - 1) {
            return triangle[i][j]
        }
        if (map.has(`${i}${j}`)) {
            return map.get(`${i}${j}`)
        } else {
            let left = help(i+1,j,triangle)
            let right = help(i+1,j+1,triangle)
            let res = Math.min(left,right) + triangle[i][j]
            map.set(`${i}${j}`,res)
            return res
        }
    } 
    return help(0,0,triangle)
};
const triangle = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]
console.log(minimumTotal(triangle))