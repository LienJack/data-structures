/**
 * @author lien
 * @create 2019.05.27
 * 
 */
export class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export class LinkedList {
  constructor () {
    this.head = new Node('head')
  }
  // 根据index查找节点
  findByIndex (index) {
    let currentNode = this.head // 头指针
    let pos = 0 // 序号为0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode === null ? -1 : currentNode // 越界处理
  }
  findByValue (item) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }
  // 向链表末尾追加节点
  append(newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    // 一直查询到尽头
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
  // 指定元素后插
  insert(newElement, element) {
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.error('未找到插入位置')
      return false
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  // 遍历全部显示的所有的节点
  display () {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
  // 查找前一个
  findPrev (item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  }
  // 根据值删除
  remove (item) {
    const prevNode = this.findPrev(item)
    if (prevNode === -1) {
      console.error('未能找到元素')
      return false
    }
    prevNode.next = prevNode.next.next
  }
  reverseList () {
    let currentNode = this.head.next
    let previousNode = null
    while (currentNode !== null ) {
      let nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    this.head.next = previousNode
  }
  // 环验证
  checkCircle () {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) return true
    }
    return false
  }
  // 求中间节点
  findMiddleNode () {
    let fast = this.head
    let slow = this.head
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
}

 
