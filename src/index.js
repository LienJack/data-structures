var levelOrder = function(root) {
  if (!root) return []
  let map = []
  let res = []
  const DFS = (level, root, map) => {
      if (!root) return null
      map.push({level, val: root.val})
      DFS(level+1,root.left,map)
      DFS(level+1,root.right,map)
  }
  DFS(0, root, map)
  map.forEach(item => {
    let { level, val } = item
    if (!res[level]) {
      res[level] = [val]
    } else {
      res[level].push(val)
    }
  })
  console.log(res)
  return res
};