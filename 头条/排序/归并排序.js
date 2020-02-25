function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length/2) 
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
 }
 function merge(left, right) {
   let temp = []
   while(left.length && right.length) {
     if (left[0] < right[0]) {
       temp.push(left.shift())
     } else {
       temp.push(right.shift())
     }
   }
   while (left.length) {
     temp.push(left.pop())
   }
   while (right.length) {
     temp.push(right.pop())
   }
   return temp
 }