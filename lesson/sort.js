import { randomArr } from './until'
var arr = randomArr(1,1000,100)
// 冒泡排序
const bubbleSort = (arr) => {
  if (arr.length <= 1) return new Error('一个还排你mb')
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false
    for(let j = 0; j < arr.length -i; j++) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        hasChange = true
      }
    }
    if(!hasChange) break
  }
  // console.log(arr)
}

// 插入排序
const insertionSort = (arr) => {
  if (arr.length <= 1) return
  for(let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i-1
    // 若a[i]前大于a[i]的值的话，向后移动，腾出，直到<=arr[i]
    for (j; j>=0; j--) {
      if(arr[j]>temp) {
        arr[j+1] = arr[j]
      } else {
        break
      }
    }
    arr[j+1] = temp
  }
  console.log(arr)
}

const slectionSort = (arr) => {
  if(arr.length <=1) return
  for(let i=0; i <arr.length-1; i++) {
    let minIndex = i
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j]< arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(arr)
}

/**
 * 归并算法
 */
const mergeArr = (left, right) => {
  let temp = []
  let leftIndex = 0
  let rightIndex = 0
  while(left.length > leftIndex && right.length > rightIndex) {
    if(left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
const mergeSort = (arr) => {
  if(arr.length <=1) return arr
  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return mergeArr(mergeSort(left), mergeSort(right))
}

/**
 * 快速排序
 */
// 苑一峰版
// 好像归并算法
const quickSort_yuan = (arr) => {
  if (arr.length <= 1) { return arr }
  let pivotIndex = Math.floor(arr.length/2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort_yuan(left).concat([pivot],quickSort_yuan(right))
}
// 极客时间，有点难理解
const swap = (arr, i ,j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
const partition = (arr, pivot, left, right) => {
  const pivotVal = arr[pivot]
  let startIndex = left
  for (let i = left; i < right; i++) {
      if (arr[i] < pivotVal) {
          swap(arr, i, startIndex)
          startIndex++
      }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

const quickSort = (arr, left, right) => {
  if (left < right) {
      let pivot = right
      let partitionIndex = partition(arr, pivot, left, right)
      quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
      quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }

}

