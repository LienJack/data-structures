import { randomArr } from '../lesson/until'
var arr = randomArr(1,1000,100)

function bubblesort(arr) {
  for(let i=0; i< arr.length; i++) {
    let hasChange = false
    for(let j =0; j<arr.length-1; j++) {
      if(arr[j]>arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = arr[j]
        hasChange = true
      }
    }
    if(!hasChange) break;
  }
  return arr
}
console.log(bubblesort(arr))