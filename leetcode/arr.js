function hasGroupsSizeX(deck) {
  // 排序
  deck.sort((a, b) => a - b ) 
  // 定义最小，准备用来做约数
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  for (let i =0, len = deck.length, tmp =[]; i<len;i++) {
    tmp.push(deck[i])
    for (let j = i + 1; j < len - 1; j++ ) {
      if (deck[i] === deck[j]) { 
        tmp.push(deck[j])
      } else {
        if(min>tmp.length) {
          min = tmp.length
        }
        // 注意concat是数组的拷贝，没有就算使用引用类型
        dst.push([].concat(tmp))
        i = j
        break;
      }
    }
  }
  // 求最小的是否为最大公约数
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}

function canPlaceFlowers (flowerbed, n) {
  let max = 0 // 最多种植的数量
  for(let i = 0; i < flowerbed.length-1; i++) {
    // 只有为0时候才进行判断
    if(flowerbed[i] === 0) {
      // 第一位判断
      if (i===0 && flowerbed[1] === 0) {
        max ++
      } else if (flowerbed[i-1]===0&&flowerbed[i+1]===0) {
        max ++
        i++ // 注意要跳过一位
      }
    }
  }
  if (max > n) {
    return true
  } else {
    return false
  }
}

function grayCode (n) {
  if (n === 1) {
    return ['0', '1']
  } else {
    let prev = grayCode(n-1)
    let result = []
    let max =  Math.pow(2,n) - 1
    for (let i = 0, len = prev.length; i < len; i++) {
      result[i] = `0${prev[i]}`
      result[max-1] = `1${prev[max-i]}`
    }
    return result
  }
}

