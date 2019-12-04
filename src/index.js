import { MinHeap, MaxHeap } from '../collection/Heap'



var MedianFinder = function() {
     this.minHeap = new MinHeap()
     this.maxHeap = new MaxHeap()
     this.count = 0
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.count % 2 === 0) {
      this.minHeap.insert(num)
      this.maxHeap.insert(this.minHeap.remove())
    } else {
      this.maxHeap.insert(num)
      this.minHeap.insert(this.maxHeap.remove())
    }
    this.count ++
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.count % 2 === 1) {
      return this.maxHeap.peak()
    } else {
      return (this.minHeap.peak() + this.maxHeap.peak()) /2
    }
};

let med = new MedianFinder()
med.addNum(1)
med.addNum(2)
med.addNum(3)
console.log(med.findMedian())