var levelOrder = function(root) {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    let vals = [...queue]
    queue = []
    let temp = []
    while (vals.length) {
      let cur = vals.shift()
      temp.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    res.push(temp)
  }
  return res
};