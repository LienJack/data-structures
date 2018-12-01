class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    let newNode = new Node(key)
    if(this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // 中序遍历
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback)
  }
  // 先序排序
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback)
  }
  // 后序排序
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback)
  }
  max() {
    return this._maxNode(this.root)
  }
  search(key) {
    return this._serachNode(this.root, key)
  }
  

  /**
   * --------------------------------
   *  私有方法
   * --------------------------------
   */
  _inOrderTraverseNode(node, callback) {
    if(node !== null) {
      this._inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this._inOrderTraverseNode(node.right, callback)
    }
  }
  _preOrderTraverseNode(node, callback) {
    if(node !== null) {
      callback(node.key)
      this._preOrderTraverseNode(node.left, callback)
      this._preOrderTraverseNode(node.right, callback)
    }
  }
  _postOrderTraverseNode(node, callback) {
    if(node !== null) {
      this._postOrderTraverseNode(node.left, callback)
      this._postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  _maxNode(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  _serachNode(node, key) {
    if(node === null) {
      return false
    } else if (key > node.key) {
      return this._serachNode(node.right, key)
    } else if (key < node.key) {
      return this._serachNode(node.right, key)
    } else {
      return true
    }
  }
}

let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

// function printNode(value) {
//   console.log(value)
// }
// tree.postOrderTraverse(printNode)
// // console.log(tree)
console.log(tree.search(25))