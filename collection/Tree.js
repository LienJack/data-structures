export class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
// 二叉搜索树
export class BinarySearchTree {
  constructor (arr = []) {
    this.root = null
    if (arr.length > 0) {
      arr.forEach(item => {
        this.insert(item)
      })
    }
  }
  insert(value) {
    let newNode = new TreeNode(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  inOrder(cb) {
    this._inOrder(this.root, cb)
  }
  _inOrder(node, cb) {
    if (node !== null) {
      this._inOrder(node.left, cb)
      cb(node.value)
      this._inOrder(node.right, cb)
    }
  }
  print () {
    this.inOrder(val => console.log(val))
  }
}
// 普通二叉树
export class BinaryTree {
  constructor (arr) {
    this.root = null
    const treeNodeArr = arr.map(item => {
      return new TreeNode(item)
    })
    treeNodeArr.unshift(null)
    for (let i = 1; i <= Math.floor(arr.length /2); i ++) {
      if (treeNodeArr[i*2] && treeNodeArr[i].left === null) { treeNodeArr[i].left = treeNodeArr[i * 2] }
      if (treeNodeArr[i*2 +1] && treeNodeArr[i].right === null) { treeNodeArr[i].right = treeNodeArr[i*2+1]}
    }
    this.root = treeNodeArr[1]
  }
  inOrder(cb) {
    this._inOrder(this.root, cb)
  }
  _inOrder(node, cb) {
    if (node !== null) {
      this._inOrder(node.left, cb)
      cb(node.value)
      this._inOrder(node.right, cb)
    }
  }
  print () {
    this.inOrder(val => console.log(val))
  }
}