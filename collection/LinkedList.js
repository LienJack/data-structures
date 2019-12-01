export class LinkedNode {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {
  constructor (arr = []) {
    this.head = new LinkedNode('head')
    this.length = 0
    if (arr.length) {
      arr.forEach(item => {
        this.append(item)
      })
    }
  }
  findByValue (item) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.value !== item) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }
  // 指定插入
  insert (newValue, oldValue) {
    const curNode = this.findByValue(oldValue)
    if (curNode === -1) {
      console.error('未能找到插入位置')
      return 
    }
    const newNode = new LinkedNode (newValue)
    newNode.next = curNode.next
    curNode.next = newNode
    this.length ++
    return true
  }
  append (val) {
    let curNode = this.head
    while (curNode.next !== null) {
      curNode = curNode.next
    }
    const newNode = new LinkedNode(val)
    curNode.next = newNode
    this.length ++
    return true
  }
  print () {
    let curNode = this.head
    while(curNode !== null) {
      console.log(curNode.value)
      curNode = curNode.next
    }
  }
}