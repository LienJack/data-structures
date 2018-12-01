class LinkedList {
  constructor () {
    // 使用哨兵 同一操作
    this.head = new Node('head')
    this._length = 0
  }
  // 查找
  findByValue (item)  // 根据value查找
  findByIndex (index) // 根据index查找
  findPrev (item) // 查找前一个
  findMiddleNode () // 求中间节点

  // 插入
  insert (newElement, element)  // 制定插入
  append(element) // 尾部插入

  // 删除指定元素
  remove (item) // 移除指定元素
  removeByIndexFromEnd(index)  // 删除倒数第K个节点

  show () // 打印全部元素
  checkCircle() // 环验证

}
class LinkedList {
  constructor () {
    // 使用哨兵 同一操作
    this.head = new Node('head')
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
  remove (item) {
    const desNode = this.findByValue(item)
    if(desNode === -1) {
      return console.log('未找到元素')
    }
    const prevNode = this.findPrev(item)
    prevNode.next = desNode.next
    this._length--
  }
  show () {
    let currentNode = this.head
    while(currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
}