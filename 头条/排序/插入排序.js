function insertSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let tar = i
    for (let j = i -1; j>=0; j--) {
      if (arr[tar] < arr[j]) {
        tar = j
      } else {
        break;
      }
    }
  }
  return arr
}