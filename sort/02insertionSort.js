import { randomArr } from '../lesson/until'
var arr = randomArr(1,1000,100)

function insertionSort(arr) {
  for(let i =1; i <arr.length; i++) {
    let temp = arr[i]
    let j = i-1
    for(j; j>=0; j--) {
      if(arr[j]>temp) {
        arr[j+1] = arr[j]
      } else {
        break
      }
    }
    arr[j+1] = temp
  }
  return arr
}

console.log(insertionSort(arr))