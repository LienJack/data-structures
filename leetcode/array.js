// 17. Letter Combinations of a Phone Number
function letterCombinations (str) {
  let map  = ['', 1 , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = str.split('')
  let code = []
  num.forEach((item) => {
    if(map[item]) {
      code.push(map[item])
    }
  })
  let comb = arr => {
    console.log(code)
    // 保存组合的结果
    let tmp = []
    for(let i=0, il=arr[0].length; i< il; i++) {
      for (let j =0,jl =arr[1].length;j<jl;j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0,2,tmp)
    if(arr.length>1) {
      comb(arr)
    } else {
      return arr[0]
    }
   
  }
  return comb(code)
}

console.log(letterCombinations('23'))