// 二叉搜索树数
function BinarySearchTree() {
  let Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  this.insert =function(key) {
    var newNode = new Node(key)
    if(root == null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  var insertNode = function(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  // 中序遍历
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }
  // 先序遍历
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  }
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }
  this.max = function() {
    return maxNode(root)
  }
  this.search = function(key) {
    return serachNode(root, key)
  }
  this.remove = function(key) {
    root = removeNode(root, key)
  }

  // 中序遍历
  var inOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历
  var preOrderTraverseNode = function(node, callback) {
    if(node != null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }
  var postOrderTraverseNode = function(node, callback) {
    if(node != null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 最大值
  var maxNode = function(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  var serachNode = function(node, key) {
    if(node === null) {
      return false
    }
    if (key < node.key) {
      return serachNode(node.left, key)
    } else if (key > node.key) {
      return serachNode(node.right, key)
    } else {
      return true
    }
  }
  var removeNode = function(node, key) {
    if(node = null) {
      return null
    }
    if(key < node.key) {
      node.left = removeNode(node.left, key)
    }
    if(key < node.key) {
      node.left = removeNode(node.left, key)
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      // 一个叶子节点
      if(node.left === null && noed.right === null) {
        node = null
        return node
      }
      // 只有一个子节点
      if(node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.right
        return node
      }
      var aux = findMindNode(node, right)
      node.right = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }
}

var tree = new BinarySearchTree()
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

function printNode(value) {
  console.log(value)
}

// tree.postOrderTraverse(printNode)
// console.log(tree.search(17))

