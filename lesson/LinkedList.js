// 单链表
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
    this._length = 0
  }
  // 根据value查找
  findByValue (item) {
    let currentNode = this.head
    while(currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 :currentNode
  }
  // 根据index查找
  findByIndex (index) {
    let currentNode = this.head
    let pos = 0
    while(currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }
  // 指定插入
  insert (newElement, element) {
    const currentNode = this.findByValue(element)
    if(currentNode === -1) {
      console.log('未能找到插入位置')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
    this._length++
    return true
  }
  // 尾部插入
  append (element) {
    let currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    const newNode = new Node(element)
    currentNode.next = newNode
    this._length++
    return true
  }
  // 查找前一个
  findPrev (item) {
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if(currentNode.next === null) {
      return -1
    }
    return currentNode
  }
  // 移除指定元素
  remove (item) {
    const desNode = this.findByValue(item)
    if(desNode === -1) {
      return console.log('未找到元素')
    }
    const prevNode = this.findPrev(item)
    prevNode.next = desNode.next
    this._length--
  }
  // 打印
  show () {
    let currentNode = this.head
    while(currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
  size () {
    return this._length
  }
  reverseList () {
    let currentNode = this.head.next
    let previousNode = null
    while (currentNode !== null) {
      let nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    this.head.next = previousNode
  }
  /**
   * 2018.11.28 利用栈编写翻转，大数据时候空间不好
   */
  reverseListLien () {
    let currentNode
    const arr = []
    currentNode = this.head.next
    while(currentNode !== null) {
      arr.push(currentNode.element)
      currentNode = currentNode.next
    }
    this.head.next = null
    while(arr.length !== 0) {
      this.append(arr.pop())
    }
  }

  // 环验证
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !==null) {
      fast = fast.next.next
      slow = slow.next
      if(slow === fast) return true
    }
    return false
  }

  // 删除倒数第K个节点
  removeByIndexFromEnd(index) {
    if(this.checkCircle()) return false
    let pos = 1
    this.reverseList()
    let currentNode = this.head.next
    while(currentNode !== null && pos < index) {
      currentNode = currentNode.next
      pos++
    }
    if(currentNode ===null) {
      console.log('节点不存在')
    }
    this.remove(currentNode.element)
    this.reverseList()
  }
  // 求中间节点
  findMiddleNode () {
    let fast = this.head
    let show = this.head
    while(fast.next !== null && fast.next.next !==null) {
      fast = fast.next.next
      slow = slow.next
    }
    console.log(slow)
    return slow
  }
}

var list = new LinkedList()
list.append('1')
list.append('2')
list.append('3')
list.append('4')
list.removeByIndexFromEnd(2)
list.show()

function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
  let length = 0
  let head = null
  let tail = null
  this.insert = function(position, element) {
    if(position >= 0 && position <= length){
      let node = new Node(element)
      let current = head
      let previous
      let index = 0
      if(position === 0) {
        if(!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      } else if (position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node

        current.prev = node
        node.prev = previous
      }

      length++
      return true
    } else {
      return false
    }
  }
  this.removeAt = function(position) {
    if(position > -1 && position < length) {
      let current = head
      let previous
      index =  0

      if(position === 0) {
        head = current.next
        if(length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length - 1) {
        current = tail
        tail = current.prev
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  
}
