function quickSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  const tar = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < tar) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([tar], quickSort(right))
}