var checkInclusion = function (s1, s2) {
  let need = {}
  let win = {}
  let match = 0
  let needLen = 0
  let left = 0
  let right = 0
  for (let i = 0; i < s1.length; i++) {
    let item = s1[i]
    need[item] ? need[item] ++ : need[item] = 1
  }
  needLen = Object.keys(need).length
  // console.log(need)
  while(right < s2.length) {
    let rightStr = s2[right]
    if (need[rightStr]) {
      win[rightStr] ? win[rightStr]++ : win[rightStr] = 1
      if (win[rightStr] === win[rightStr]) match++
    }
    right++
    while (needLen === match) {
      // debugger
      let leftStr = s2[left]
      if (right - left === s1.length) return true
      if (need[leftStr]) {
        win[leftStr] --
        if (win[leftStr] < need[leftStr]) match--
      }
      left ++
    }
  }
  return false
};

console.log(checkInclusion("ab", "eidboaoo"))