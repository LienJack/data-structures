var findCircleNum = function (M) {
  if (!M.length) return 0
  let len = M.length
  let count = 0
  let visited = {}
  function DFS(i) {
    for (let j = 0; j < len; j++) {
      if (M[i][j] === 1 && !visited[j]) {
        visited[j] = true
        DFS(j)
      }
    }
  }
  for (let i = 0; i < len; i++) {
    if (!visited[i]) {
      DFS(i)
      count++
    }
  }
  return count
};