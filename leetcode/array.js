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
