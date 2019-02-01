import { randomArr } from '../lesson/until'
var arr = randomArr(1,1000,100)

function slectionSort(arr) {
  for(let i=0; i< arr.length; i++) {
    let minIndex = i
    for(let j = i+1; j<arr.length;j++) {
      if(arr[j]<arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
console.log(slectionSort(arr))