import { BinarySearchTree } from '../collection/Tree'
let tree = new BinarySearchTree([1,2,3,4,5,6,7])
// console.log(tree)
// 中序遍历
function inorderTraversal(root, arr = []) {
  // debugger
  if (root) {
    inorderTraversal(root.left, arr)
    arr.push(root.value)
    inorderTraversal(root.right, arr)
  }
  return arr
}

function inorderTraversalV2(root) {
  let stack = []
  let res = []
  let cur = root
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.value)
    cur = cur.right
  } 
  return res
}

console.log(inorderTraversalV2(tree.root, []))