var orangesRotting = function(grid) { 
    let queue = []
    let min = 0
    let fresh = 0
    let row = grid.length
    let col = grid[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) fresh ++
            if (grid[i][j] === 2) queue.push([i,j])
        }
    }
    // console.log(queue.slice())
    while (queue.length && fresh) {
        let next = [] // 下一轮
        while(queue.length) {
            // debugger
            let cur = queue.shift()
            let i = cur[0]
            let j = cur[1]
            // 上
            if (i-1>= 0 && grid[i-1][j] === 1) {
                next.push([i-1,j])
                grid[i-1][j] = 2
                fresh --
            }
            // 下
            if (i+1 < row && grid[i+1][j] === 1) {
                next.push([i+1,j])
                grid[i+1][j] = 2
                fresh --
            }
            // 左
            if (j-1 >= 0 && grid[i][j-1] === 1) {
                next.push([i,j-1])
                grid[i][j-1] = 2
                fresh --
            }
            // 右
            if (j+1 < col && grid[i][j+1] === 1) {
                next.push([i,j+1])
                grid[i][j+1] = 2
                fresh --
            }
        }
        queue = next
        min++
    }
    return fresh === 0 ? min :-1;
}

const arr = [[1,2]]
console.log(orangesRotting(arr))