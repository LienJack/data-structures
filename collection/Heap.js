export class MinHeap {
  constructor(arr = []) {
    this.heap = [null]
    arr.forEach(item => {
      this.insert(item)
    })
  }
  peak() {
    return this.heap[1]
  }
  len() {
    return this.heap.length - 1
  }
  insert(num) {
    const heap = this.heap
    heap.push(num)
    const heapLength = heap.length
    if (heapLength <= 2) {
      return
    }
    let id = heapLength -1
    let parentId = Math.floor(id/2)
    while (parentId && heap[id] < heap[parentId]) {
      [heap[id], heap[parentId]] = [heap[parentId], heap[id]]
      id = parentId
      parentId = Math.floor(id/2)
    }
  }
  remove() {
    const heap = this.heap
    if (heap.length <= 1) return
    if (heap.length <= 2) return heap.pop()
    const last = heap.pop()
    let i = 1
    const smallest = heap[i]
    heap[i] = last
    let leftId = i * 2
    let rightId = i * 2 + 1
    while ((heap[leftId] !== undefined && heap[i] > heap[leftId]) || (heap[rightId] !== undefined && heap[i] > heap[rightId])) {
      if (heap[rightId] !== undefined && heap[rightId] < heap[leftId]) {
        [heap[i], heap[rightId]] = [heap[rightId], heap[i]]
        i = rightId
      } else {
        [heap[i], heap[leftId]] = [heap[leftId], heap[i]]
        i = leftId
      }
      leftId = i * 2
      rightId = i * 2 + 1
    }
    return smallest
  }
}

export class MaxHeap {
  constructor(arr =[]) {
    this.heap = [null]
    arr.forEach(item => {
      this.insert(item)
    })
  }
  peak () {
    return this.heap[1]
  }
  len () {
    return this.heap.length - 1
  }
  insert(num) {
    const heap = this.heap
    heap.push(num)
    const heapLength = heap.length
    if (heapLength <= 2) {
      return 
    }
    let id = heapLength - 1
    let parentId = Math.floor(id/2)
    while (parentId && heap[id] > heap[parentId]) {
      [heap[id], heap[parentId]] = [heap[parentId], heap[id]]
      id = parentId
      parentId = Math.floor(id/2)
    }
  }
  remove() {
    const heap = this.heap
    if (heap.length <= 1) return
    if (heap.length <=2) return this.heap.pop()
    const last = heap.pop()
    let i = 1
    const maxest = heap[i]
    heap[i] = last
    let leftId = i * 2
    let rightId = i * 2 + 1
    while((heap[leftId] !== undefined && heap[i] < heap[leftId]) || (heap[rightId]) !== undefined && heap[i] < heap[rightId]) {
      if (heap[rightId] !== undefined && heap[rightId] > heap[leftId]) {
        [heap[i], heap[rightId]] = [heap[rightId], heap[i]]
        i = rightId
      } else {
        [heap[i], heap[leftId]] = [heap[leftId], heap[i]]
        i = leftId
      }
      leftId = i * 2
      rightId = i * 2 + 1
    }
    return maxest
  }
}