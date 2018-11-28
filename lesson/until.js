export const randomArr = (min, max, len) => {
  let _index = 0
  const arr = []
  if(len >= max -min) return new Error('数组过长')
  while(_index < len) {
    let current = parseInt(min+ (max-min)*Math.random())
    let isHas = arr.includes(current)
    if(!isHas) {
      arr.push(current)
      _index++
    }
  }
  return arr
}

