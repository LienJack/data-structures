// 17. Letter Combinations of a Phone Number
function letterCombinations (str) {
  let map  = ['', 1 , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = str.split('')
  let code = []
  num.forEach((item) => {
    if(map[item]) {
      code.push(map[item])
    }
  })
  let comb = arr => {
    console.log(code)
    // 保存组合的结果
    let tmp = []
    for(let i=0, il=arr[0].length; i< il; i++) {
      for (let j =0,jl =arr[1].length;j<jl;j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0,2,tmp)
    if(arr.length>1) {
      comb(arr)
    } else {
      return arr[0]
    }
   
  }
  return comb(code)
}

// console.log(letterCombinations('23'))

var maximumGap = function(nums) {
  let max = 0
  let t
  if( nums.length < 2) return 0
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j]>nums[i]) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
    if (nums[i+1]) {
      t = nums[i+1] - nums[i]
      if(t > max) max = t
    }
  }
  return t
};

// console.log(maximumGap([3,6,9,1]))


var sortArrayByParityII = function(A) {
  let b = []
  let odd = 0
  let even = 1
  for (let i = 0; i < A.length; i++) {
    let min = A[i]
    for (let j = i; j <A.length; j++) {
      if (A[j] < min) {
        let c = min
        min = A[j]
        A[j] = c
      }
    }
    if (min % 2 !== 0) {
      b[even] = min
      even += 2
    } else {
      b[odd] = min
      odd += 2
    }
  }
  return b  
};

// console.log(sortArrayByParityII([4,2,5,7]))

var spiralOrder = function(matrix) {
  // 处理遍历的过程
  let map = (arr, r = []) => {
    for (let i =0,len=arr.length; i<len; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len -1) {
        r = r.concat(arr[i].reverse())
      } else {
        r. push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length -1;i>=0;i--) {
      r.push(arr[i].shift())
    }
    if (arr.length) {
      return map(arr,r)
    } else {
      return r
    }
  }
  return map (matrix, [])
};

class Heap {
  constructor (data) {
    this.data = data
  }
  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <=1) {
      return iArr
    } else {
      for (let i = Math.floor(n/2); i>=0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n-1-j)
        Heap.maxHeapify(iArr,0, n - 1 - j)
      }
      return iArr
    }
  }
  // 交换两个元素
  static swap (arr, a, b) {
    if (a === b) {
      return
    } 
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }
  // 构建最大堆
  static maxHeapify (Arr, i ,size) {
    // 左节点
    let l = i * 2 + 1
    // 右节点
    let r = i * 2 + 2
    let largest = i
    // size有效长度
    // 父节点和左节点L做比较
    if(l <= size && Arr[l] > Arr[largest]) {
       largest = l
    }
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeapify(Arr, largest, size)
    }
  }
}

var maxProfit = function (prices) {
  let count = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len -1; j++) {
      if (prices[j+1] > prices[j]) {
        count += prices[j+1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }
  return count 
};


var lemonadeChange = function(bills) {
    let hand = [] // 存储零钱
    // 是否顾客还在
    while (bills.length)  {
      let money = bills.shift ()
      if (money === 5) {
        hand.push(money)
      } else {
        // 取最大值
        hand.sort((a,b) => b-a)
        // 减去顾客饮料的钱就是需要找给顾客的零钱
        let change = money - 5
        for (let i = 0, len = hand.length; i < len; i++) {
          if(hand[i] <= change) {
            change -= hand[i]
            hand.splice(i, 1)
            i -- // 删除元素数组发生变化，要维持刚才的
          }
          if (change === 0) {
            break;
          }
        }
        if (change !==0) {
          return false
        } else {
          hand.push(money)
        }
      }
    }
    return true
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    let func = (arr, m, n) => {
      let dp = (m, n) => {
        if (m === 2 && n === 2) {
          if (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) {
            return 0
          } else if (arr[1][0] === 1 || arr[0][1] ===1) {
            return 1
          } else {
            return 2
          }
        } else if (m < 2 || n <2) {
          // 单行
          if (m < 2) {
            return arr[m-1].includes(1) ? 0 : 1
          // 单列，，没有障碍物返回0，没有返回1
          } else {
            for (let i = 0; i < m; i++) {
              if (arr[i][0] === 1) {
                return 0
              }
            }
          } 
          return 1
        } else {
          return dp(m-1,n) + dp(m,n-1)
        }
      }
      return dp(m,n)
    }
    return func(obstacleGrid, obstacleGrid.length, obstacleGrid[0].length)
};

// console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))


var isValid = function(s) {
  let stach = []
  let map = { '{':'}', "[": "]","(":")" }  
  let arr = s.split("")
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in map) {
      stach.push(arr[i])
    } else {
      let tmp = stach.pop()
      if (map[tmp]!==arr[i]) return false 
    }
  } 
  if (!stach.length) {
    return true
  } else {
    return false
  }
};

// console.log(isValid("(]"))

// console.log('111')

var MyQueue = function() {
  this.input = []
  this.output = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
   this.input.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while (this.input.length !== 0) {
    this.output.push(this.input.pop())
  }
  let tmp = this.output.pop()
  while (this.output.length !== 0) {
    this.input.push(this.output.pop())
  }
  return tmp
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
   while (this.input.length !== 0) {
     this.output.push(this.input.pop())
   }
   let tmp = this.output.pop()
   this.input.push(tmp)
   while (this.output.length !== 0) {
     this.input.push(this.output.pop())
   }
   return tmp
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
   return this.input.length === 0 ? true : false
};

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  peak() {
    return this.heap[1];
  }

  len() {
    return this.heap.length - 1;
  }

  insert(num) {
    const heap = this.heap;
    heap.push(num);
    const heapLength = heap.length;
    if (heapLength <= 2) {
      return;
    }

    let id = heapLength - 1;
    let parentId = Math.floor(id / 2);
    while (parentId >= 1 && heap[id] < heap[parentId]) {
      [heap[id], heap[parentId]] = [heap[parentId], heap[id]];
      id = parentId;
      parentId = Math.floor(id / 2);
    }
  }

  remove() {
    const heap = this.heap;
    if (heap.length <= 1) {
      return;
    }
    if (heap.length <= 2) {
      return heap.pop();
    }

    const last = heap.pop();
    let i = 1;
    const smallest = heap[i];
    heap[i] = last;
    let leftId = i * 2;
    let rightId = i * 2 + 1;
    while ((heap[leftId] !== undefined && heap[i] > heap[leftId]) || (heap[rightId] !== undefined && heap[i] > heap[rightId])) {
      if (heap[rightId] !== undefined && heap[rightId] < heap[leftId]) {
        [heap[i], heap[rightId]] = [heap[rightId], heap[i]];
        i = rightId;
      } else {
        [heap[i], heap[leftId]] = [heap[leftId], heap[i]];
        i = leftId;
      }
      leftId = i * 2;
      rightId = i * 2 + 1;
    }
    return smallest;
  }

  inserts(nums) {
    for (const i of nums) {
      this.insert(i);
    }
    const last = heap.pop()
    let i = 1
    const smallest = heap[i]
    heap[i] = last
    let leftId = i * 2
    let rightId = i * 2 + 1
    while ((heap[leftId] !== undefined && heap[i] > heap[leftId]) || (heap[rightId] !== undefined && heap[i] > heap[rightId])) {
      if (heap[rightId] !== undefined && heap[rightId] < heap[leftId]) {
        [heap[i],heap[rightId]] = [heap[rightId], heap[i]]
        i = rightId
      }
    }
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinHeap();
  this.k = k;
  if (nums.length < 1) {
    return;
  }
  let i = 0;
  for (i; i < k; i++) {
    if (nums[i] !== undefined) {
      this.heap.insert(nums[i]);
    }
  }
  for (i; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.len() < this.k) {
    this.heap.insert(val);
    return this.heap.peak();
  }
  if (this.heap.peak() < val) {
    this.heap.remove();
    this.heap.insert(val);
    return this.heap.peak();
  }
  return this.heap.peak();
};

