var maximumSwap = function(num) {
    const arr = getArr(num)
    for (let i = 0; i < arr.length; i++) {
    let max = i
      for (let j = arr.length -1; j > i; j--) {
          if (arr[max] < arr[j]) {
              max = j
          }
      }
      if (max !==i) {
          [arr[max],arr[i]] = [arr[i],arr[max]]
          break;
      }
    }
    return  +arr.join("")
};
var getArr = function (num) {
    let arr = []
    while (num > 0) {
        let temp = num%10
        num = Math.floor(num/10)
        arr.push(temp)
    }
    arr.reverse()
    return arr
}