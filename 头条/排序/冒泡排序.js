function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let complete = true
    for (let j =0; j < arr.length -1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        complete = false
      }
    }
    if (complete) break
  }
  return arr
}